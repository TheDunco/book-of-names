import { Tab } from 'payload/dist/fields/config/types';
import { getNSDFields } from '../field-helpers/get-nsd-fields';

export const journalTab: Tab = {
    label: 'Journal',
    // add quests, npcs, locations, etc.
    fields: [
        {
            type: 'group',
            name: 'quests',
            fields: getNSDFields('quest'),
        },

        {
            type: 'group',
            name: 'npcs',
            fields: getNSDFields('npc'),
        },

        {
            type: 'group',
            name: 'locations',
            fields: getNSDFields('npc'),
        },

        {
            type: 'group',
            name: 'companionsAndMounts',
            fields: [
                ...getNSDFields('npc'),
                {
                    type: 'relationship',
                    relationTo: 'media',
                    hasMany: true,
                    name: 'pictures',
                },
            ],
        },

        {
            type: 'group',
            name: 'npcs',
            fields: [
                ...getNSDFields('npc'),
                {
                    type: 'relationship',
                    relationTo: 'media',
                    hasMany: true,
                    name: 'pictures',
                },
            ],
        },

        {
            type: 'relationship',
            label: 'Misc Notes',
            name: 'notes',
            relationTo: 'notes',
            hasMany: true,
        },
    ],
};
