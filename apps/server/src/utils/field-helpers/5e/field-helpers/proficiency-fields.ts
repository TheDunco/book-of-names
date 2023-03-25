import { Field } from 'payload/types';
import { option } from '../../../option';

export const proficiencyFields: Field[] = [
    {
        type: 'array',
        name: 'proficiency',
        fields: [
            {
                type: 'select',
                name: 'castingAbility',
                options: [
                    option('Intelligence'),
                    option('Wisdom'),
                    option('Charisma'),
                    option('Strength'),
                    option('Dexterity'),
                    option('Constitution'),
                ],
            },

            {
                type: 'number',
                name: 'proficiencyBonus',
            },

            {
                type: 'number',
                name: 'attackBonus',
            },

            {
                type: 'number',
                name: 'saveDC',
                label: '(Spell) Save DC',
            },
        ],
    },
];
