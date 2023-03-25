import { Config } from 'payload/config';
import { CollectionConfig, Field, RelationshipField } from 'payload/types';
import { backpopulate } from '../hooks/backpopulate';
import { backpopulatePolymorphicCleanupHookFactory } from '../hooks/backpopulate-cleanup-polymorphic.hook';
import { backpopulatePolymorphicHookFactory } from '../hooks/backpopulate-polymorphic.hook';

const generateLabel = (collectionSlug: string) => {
    const lowercaseLabel = `${collectionSlug.replace('-', ' ')} this is used in`;
    return lowercaseLabel.charAt(0).toUpperCase() + lowercaseLabel.slice(1);
};

const toCamelCase = (value: string) => {
    return value.replace(/([-_][a-z])/gi, ($1) => {
        return $1.toUpperCase().replace('-', '').replace('_', '');
    });
};

// Original code from https://github.com/TimHal/pcms-backpop

export const BackpopulatedRelationshipsPlugin = (incomingConfig: Config): Config => {
    for (const collection of incomingConfig.collections) {
        for (const field of collection.fields) {
            if (field.type === 'relationship' && field.relationTo) {
                if (field.hasOwnProperty('hooks')) {
                    const hasMarker = field.hooks.afterChange.find((hook) => hook === backpopulate);
                    if (hasMarker) {
                        if (Array.isArray(field.relationTo)) {
                            for (const relationTo of field.relationTo) {
                                handlePolymorphicRelationship({
                                    incomingConfig,
                                    relationTo,
                                    collection,
                                    field,
                                });
                            }
                        } else {
                            handlePolymorphicRelationship({
                                incomingConfig,
                                relationTo: field.relationTo,
                                collection,
                                field,
                            });
                        }
                    }
                }
            }
        }
    }

    return incomingConfig;
};

const handlePolymorphicRelationship = ({
    incomingConfig,
    relationTo,
    collection,
    field,
}: {
    incomingConfig: Config;
    relationTo: string;
    collection: CollectionConfig;
    field: RelationshipField;
}) => {
    const targetCollection = incomingConfig.collections.find((collection) => collection.slug === relationTo);
    const targetFieldName = toCamelCase(`${collection.slug}-${field.name}Backpopulated`);
    const targetFieldLabel = generateLabel(collection.slug);
    // create a readonly hasMany relationship field on the target collection
    const backpopulatedField: Field = backpopulateCollectionField({
        targetFieldName,
        targetFieldLabel,
        sourceCollectionSlug: collection.slug,
    });

    // prepare the target (backpopulated) collections by adding relationship fields to marked collections.
    targetCollection.fields.push(backpopulatedField);

    // replace the marker hook with the actual backpopulation hook
    // remove the marker
    field.hooks.afterChange = field.hooks.afterChange.filter((hook) => hook !== backpopulate);
    // add the backpopulate hook
    field.hooks.afterChange.push(backpopulatePolymorphicHookFactory(backpopulatedField));

    // the source collection also needs an afterDeleteHook to remove itself from the backpopulated fields on the target collection
    if (!collection.hasOwnProperty('hooks')) {
        collection.hooks = {};
    }
    if (!collection.hooks.hasOwnProperty('afterDelete')) {
        collection.hooks.afterDelete = [];
    }

    const collectionAfterDeleteHooks = collection.hooks.afterDelete || [];

    collection.hooks.afterDelete = [
        ...collectionAfterDeleteHooks,
        backpopulatePolymorphicCleanupHookFactory({
            sourceField: field.name,
            targetField: backpopulatedField.name,
            targetSlug: targetCollection.slug,
        }),
    ];
};

const backpopulateCollectionField = ({
    targetFieldName,
    targetFieldLabel,
    sourceCollectionSlug,
}: {
    targetFieldName: string;
    targetFieldLabel: string;
    sourceCollectionSlug: string;
}): RelationshipField => {
    /**
     * Backpopulate a single relationship field on a collection (not global).
     * This method is executed for each (polymorphic) relation.
     */

    const label: string = targetFieldLabel
        ? targetFieldLabel
        : `${targetFieldName.charAt(0).toUpperCase()}${targetFieldName.slice(1)} Backpopulated`;
    // create a readonly hasMany relationship field on the target collection
    const backpopulatedField: Field = {
        name: targetFieldName,
        type: 'relationship',
        relationTo: sourceCollectionSlug,
        hasMany: true,
        label,
        access: {
            create: () => false,
            read: () => true,
            update: () => false,
        },
    };
    // prepare the target (backpopulated) collections by adding relationship fields to marked collections.
    return backpopulatedField;
};
