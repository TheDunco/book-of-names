import { Field } from 'payload/types';

export const featFields: Field[] = [
    {
        type: 'array',
        name: 'feats',
        fields: [
            {
                type: 'text',
                name: 'featName',
                label: 'Name',
            },

            {
                type: 'text',
                name: 'featSummary',
                label: 'Summary',
            },

            {
                type: 'textarea',
                name: 'featDescription',
                label: 'Description',
            },
        ],
    },
];
