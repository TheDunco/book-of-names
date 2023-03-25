import { Tab } from 'payload/dist/fields/config/types';
import { alignmentOptions } from '../options-helpers/alignment-options';
import { backgroundOptions } from '../options-helpers/background-options';
import { classOptions } from '../options-helpers/class-options';
import { option } from '../../../option';

export const characterTab: Tab = {
    name: 'character',
    label: 'Character',
    fields: [
        {
            type: 'row',
            fields: [
                //TODO: Afterchange hook to add up levels for overall level
                {
                    name: 'overallLevel',
                    label: 'Level',
                    type: 'number',
                    required: true,
                    defaultValue: 1,
                },

                {
                    type: 'number',
                    name: 'xp',
                    label: 'XP',
                },

                //TODO: Make prof bonus based on level
                {
                    type: 'number',
                    name: 'proficiencyBonus',
                    label: 'Proficiency Bonus',
                },

                //TODO: Calculate AC as part of defenses
                {
                    type: 'number',
                    name: 'armorClass',
                    label: 'AC',
                },

                {
                    type: 'number',
                    name: 'initiative',
                },

                {
                    type: 'number',
                    name: 'speed',
                },

                {
                    type: 'number',
                    name: 'flySpeed',
                },

                {
                    type: 'number',
                    name: 'swimSpeed',
                },
            ],
        },

        {
            type: 'checkbox',
            name: 'inspiration',
        },

        {
            type: 'text',
            name: 'race',
        },

        {
            type: 'text',
            name: 'pronouns',
        },

        {
            type: 'array',
            name: 'classes',
            fields: [
                {
                    name: 'class',
                    type: 'select',
                    options: [...classOptions],
                },

                {
                    name: 'levels',
                    type: 'number',
                    defaultValue: 1,
                    max: 20,
                },
            ],
        },

        {
            type: 'select',
            name: 'alignment',
            options: [...alignmentOptions],
        },

        {
            type: 'select',
            name: 'background',
            options: [...backgroundOptions],
        },

        {
            type: 'collapsible',
            label: 'Visual Appearance',
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            type: 'number',
                            name: 'age',
                        },

                        {
                            type: 'text',
                            name: 'height',
                        },

                        {
                            type: 'text',
                            name: 'weight',
                        },
                    ],
                },

                {
                    type: 'select',
                    name: 'size',
                    options: [
                        option('Tiny'),
                        option('Small'),
                        option('Medium'),
                        option('Large'),
                        option('Huge'),
                        option('Gargantuan'),
                    ],
                },

                {
                    type: 'text',
                    name: 'eyes',
                },

                {
                    type: 'text',
                    name: 'hair',
                },

                {
                    type: 'text',
                    name: 'skin',
                },

                {
                    type: 'text',
                    name: 'clothes',
                },

                {
                    name: 'other',
                    type: 'textarea',
                },
            ],
        },

        {
            type: 'textarea',
            name: 'languages',
        },

        {
            type: 'textarea',
            name: 'proficiencies',
        },
    ],
};
