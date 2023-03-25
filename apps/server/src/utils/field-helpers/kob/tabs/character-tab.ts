import { Tab } from 'payload/dist/fields/config/types';

export const characterTab: Tab = {
    name: 'character',
    label: 'Character',
    fields: [
        {
            type: 'text',
            name: 'Trope',
        },

        {
            type: 'collapsible',
            label: 'Description',
            fields: [
                {
                    type: 'number',
                    name: 'age',
                },

                {
                    type: 'text',
                    name: 'pronouns',
                },

                {
                    type: 'text',
                    name: 'fear',
                },

                {
                    type: 'text',
                    name: 'motivation',
                },

                {
                    type: 'textarea',
                    name: 'description',
                },

                {
                    type: 'text',
                    name: 'grade',
                },
            ],
        },

        {
            type: 'collapsible',
            label: 'Your Broom',
            fields: [
                {
                    type: 'text',
                    name: 'broomName',
                },

                {
                    type: 'text',
                    name: 'broomLook',
                },

                {
                    type: 'text',
                    name: 'mechanicalBenefit',
                },
            ],
        },

        {
            type: 'collapsible',
            label: 'Your Wand',
            fields: [
                {
                    type: 'text',
                    name: 'wandWood',
                    label: 'Wood',
                },

                {
                    type: 'text',
                    name: 'wandCore',
                    label: 'Core',
                },

                {
                    type: 'text',
                    name: 'wandLength',
                    label: 'Length',
                },

                {
                    type: 'text',
                    name: 'wandFlexibility',
                    label: 'Flexibility',
                },

                {
                    type: 'text',
                    name: 'wandAppearance',
                    label: 'Appearance',
                },
            ],
        },

        {
            type: 'textarea',
            name: 'animalFamiliar',
        },
    ],
};
