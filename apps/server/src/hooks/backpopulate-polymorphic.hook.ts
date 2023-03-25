import payload from 'payload';
import { Field, FieldHook } from 'payload/types';

// Original code from https://github.com/TimHal/pcms-backpop

export const backpopulatePolymorphicHookFactory = (backpopulatedField: Field): FieldHook<any, any, any> => {
    const hook: FieldHook = async (args) => {
        const { operation, originalDoc, value, previousValue } = args;

        if (operation === 'create' || operation === 'update') {
            if (value === undefined || value === null) {
                return;
            }

            // comparing JSON representation is the easiest approach here
            const stringified = value.map(JSON.stringify);
            const stringifiedPrev = previousValue ? previousValue.map(JSON.stringify) : [];

            const removedTargets = [...stringifiedPrev]
                .filter((x) => !stringified.includes(x))
                .map((str) => JSON.parse(str));

            const addedTargets = stringified
                .filter((x: any) => !stringifiedPrev.includes(x))
                .map((str: string) => JSON.parse(str));

            /**
             * At this point we can update the affected collections.
             * Thanks to the previousDoc this is much more efficient now.
             *
             * At first, aggregate all collections by their slugs of affected data,
             * later on we streamline the update process for simplicity.
             */

            const affectedSlugs = new Set([...addedTargets, ...removedTargets].map((el) => el.relationTo));

            // using an extra conversion to array here for compatibility
            for (const slug of Array.from(affectedSlugs)) {
                // we can now get all affected documents in one go - this increases performance
                const affectedDocuments = (
                    await payload.find({
                        collection: slug,
                        overrideAccess: true,
                        depth: 0,
                        limit: 100000,
                        pagination: false,
                        where: {
                            id: {
                                in: [...addedTargets, ...removedTargets]
                                    .filter((el) => el.relationTo === slug)
                                    .map((el) => el.value),
                            },
                        },
                    })
                ).docs;

                // reduce the addedItems to their ids, then check against those and remove the document from all other affectedDocuments
                // just a minor performance improvement but it saves one extra step
                const addedTargetIds = addedTargets
                    .filter((el: { relationTo: any }) => el.relationTo === slug)
                    .map((el: { value: any }) => el.value);
                for (const affectedDocument of affectedDocuments) {
                    if (!affectedDocument[backpopulatedField['name']]) {
                        affectedDocument[backpopulatedField] = [];
                    }
                    const references = getReferences(affectedDocument, backpopulatedField);

                    const updatedReferences = getUpdatedReferences(
                        addedTargetIds,
                        affectedDocument,
                        originalDoc,
                        references
                    );

                    // finally, update the affected document
                    await payload.update({
                        collection: slug,
                        id: affectedDocument.id,
                        overrideAccess: true,
                        data: {
                            [backpopulatedField['name']]: updatedReferences,
                        },
                        depth: 0,
                    });
                }
            }
        }
        return;
    };

    return hook;
};

// Handles if an existing document does not have the backpopulated field yet, even though the collection should have it by this point
const getReferences = (affectedDocument: any, backpopulatedField: Field) => {
    if (!affectedDocument[backpopulatedField['name']]) {
        return [];
    }
    return affectedDocument[backpopulatedField['name']];
};

const getUpdatedReferences = (
    addedTargetIds: string | any[],
    affectedDocument: { id: any },
    originalDoc: { id: any },
    references: any[]
) => {
    if (addedTargetIds.includes(affectedDocument.id)) {
        return Array.from(new Set([...references, originalDoc.id]));
    } else {
        return references.filter((el: any) => el !== originalDoc.id);
    }
};
