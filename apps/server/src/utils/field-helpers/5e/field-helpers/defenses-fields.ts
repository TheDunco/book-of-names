import { Field } from 'payload/types';
import { option } from '../../../option';

export const defensesFields: Field[] = [
    {
        type: 'array',
        name: 'defenses',
        //TODO: Validate that only of each type can be equipped besides misc
        //TODO: Add hook to calculate AC based on this and dex mod
        //TODO: Disadvantage on stealth if wearing heavy armor
        //TODO: For ^ make active effects tab/combat section
        fields: [
            {
                type: 'select',
                name: 'defenseType',
                options: [
                    option('Heavy Armor'),
                    option('Medium Armor'),
                    option('Light Armor'),
                    option('Natural Armor'),
                    option('Shield'),
                    option('Misc'),
                ],
            },

            {
                type: 'number',
                name: 'base',
                defaultValue: 10,
            },

            {
                type: 'number',
                name: 'bonus',
                defaultValue: 0,
            },

            {
                type: 'checkbox',
                name: 'magical',
            },

            {
                type: 'number',
                name: 'magicalBonus',
                defaultValue: 0,
                admin: {
                    condition: (_, siblingData) => {
                        return siblingData.magical === true;
                    },
                },
            },
        ],
    },
];
