import payload from 'payload';
import { AfterDeleteHook } from 'payload/dist/collections/config/types';

// Original code from https://github.com/TimHal/pcms-backpop

export interface BackpopulateCleanupHookArgs {
    sourceField: string;
    targetSlug: string;
    targetField: string;
}

//When the parent field is deleted
export const backpopulatePolymorphicCleanupHookFactory = ({
    sourceField,
    targetField,
}: BackpopulateCleanupHookArgs): AfterDeleteHook => {
    const cleanupHook: AfterDeleteHook = async (doc) => {
        // query all documents which have a relationship to this document
        const value = doc[sourceField] ?? [];

        const affectedSlugs: string[] = Array.from(new Set(value.map((el: { relationTo: any }) => el.relationTo)));

        for (const slug of affectedSlugs) {
            for (const affectedDocumentId of value
                .filter((el: { relationTo: string }) => el.relationTo === slug)
                .map((el: { value: any }) => el.value)) {
                // we hold a reference to these documents, just remove our own id and we're good
                // we still need to query the documents in order to retain all other back references
                const affectedDocument = await payload.findByID({
                    collection: slug,
                    id: affectedDocumentId,
                    overrideAccess: true,
                    depth: 0,
                });

                const prevReferences = affectedDocument[targetField];

                await payload.update({
                    collection: slug,
                    id: affectedDocumentId,
                    data: {
                        [targetField]: prevReferences.filter((el: string) => el !== doc.id),
                    },
                    overrideAccess: true,
                    depth: 0,
                });
            }
        }
    };

    return cleanupHook;
};
