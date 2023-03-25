import { Field } from 'payload/types';

export const getNSDFields = (name?: string): Field[] => [
    {
        type: 'text',
        name: name ? `${name}Name` : 'name',
    },

    {
        type: 'text',
        name: name ? `${name}Summary` : 'summary',
    },

    {
        type: 'richText',
        name: name ? `${name}Description` : 'description',
    },
];
