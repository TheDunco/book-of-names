import { Tab } from 'payload/dist/fields/config/types';
import { getNSDFields } from '../field-helpers/get-nsd-fields';

export const journalTab: Tab = {
    label: 'Journal',
    fields: [
        {
            type: 'array',
            name: 'journalChapters',
            fields: [
                {
                    type: 'text',
                    name: 'name',
                },

                {
                    type: 'array',
                    name: 'journalEntries',
                    fields: [
                        {
                            type: 'relationship',
                            name: 'pictures',
                            label: 'Picture(s)',
                            hasMany: true,
                            relationTo: 'media',
                        },
                        ...getNSDFields(),
                    ],
                },
            ],
        },
    ],
};
