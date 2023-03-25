import { CollectionConfig } from 'payload/types';

export const Campaigns: CollectionConfig = {
    slug: 'campaigns',

    labels: {
        singular: 'Campaign',
        plural: 'Campaigns',
    },

    admin: {
        useAsTitle: 'name',
    },

    fields: [
        {
            type: 'text',
            name: 'name',
            required: true,
        },

        {
            type: 'relationship',
            name: 'players',
            relationTo: 'users',
            hasMany: true,
        },

        {
            type: 'relationship',
            name: 'characters',
            //TODO: Add other character sheet types
            relationTo: ['fifth-edition-character', 'kids-on-brooms-character'],
            hasMany: true,
        },

        {
            type: 'relationship',
            name: 'media',
            relationTo: 'media',
            hasMany: true,
        },

        //TODO: Use backpop plugin to backpopulate this field
        {
            type: 'relationship',
            name: 'notes',
            relationTo: 'notes',
            hasMany: true,
            admin: {
                readOnly: true,
            },
        },
    ],
};
