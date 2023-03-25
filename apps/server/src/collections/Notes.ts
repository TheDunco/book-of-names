import { CollectionConfig } from 'payload/types';
import { isAdminOrSelf } from '../access/isAdminOrSelf';

export const Notes: CollectionConfig = {
    slug: 'notes',

    labels: {
        singular: 'Note',
        plural: 'Notes',
    },

    admin: {
        useAsTitle: 'name',
    },

    access: {
        update: isAdminOrSelf,
        delete: isAdminOrSelf,
    },

    fields: [
        {
            type: 'text',
            name: 'name',
            required: true,
        },

        {
            type: 'richText',
            name: 'note',
        },

        {
            type: 'relationship',
            name: 'media',
            relationTo: 'media',
            hasMany: true,
        },

        {
            type: 'relationship',
            name: 'campaign',
            relationTo: 'campaigns',
            hasMany: false,
        },

        {
            type: 'relationship',
            name: 'character',
            relationTo: 'fifth-edition-character',
            hasMany: true,
        },

        {
            type: 'relationship',
            name: 'creator',
            relationTo: 'users',
            hasMany: false,
        },
    ],
};
