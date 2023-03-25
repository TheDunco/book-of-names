import { CollectionConfig } from 'payload/types';
import { isAdminOrSelf } from '../access/isAdminOrSelf';
import { characterTab } from '../utils/field-helpers/kob/tabs/character-tab';
import { schoolBagTab } from '../utils/field-helpers/kob/tabs/school-bag-tab';
import { statsTab } from '../utils/field-helpers/kob/tabs/stats-tab';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
export const KidsOnBroomsCharacter: CollectionConfig = {
    slug: 'kids-on-brooms-character',
    labels: {
        singular: 'Kids on Brooms Character',
        plural: 'Kids on Brooms Characters',
    },

    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name'],
    },

    access: {
        read: isAdminOrSelf,
        create: isAdminOrSelf,
        update: isAdminOrSelf,
        delete: isAdminOrSelf,
    },

    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },

        {
            name: 'pictures',
            label: 'Picture(s)',
            type: 'relationship',
            hasMany: true,
            relationTo: 'media',
            admin: {
                position: 'sidebar',
            },
        },

        {
            type: 'number',
            name: 'adversityTokens',
            defaultValue: 3,
            admin: {
                width: '50%',
            },
        },

        {
            type: 'tabs',
            tabs: [statsTab, characterTab, schoolBagTab],
        },
    ],
};
