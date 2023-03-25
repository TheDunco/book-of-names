import { Field } from 'payload/types';
import { option } from '../../../option';
import { getNSDFields } from './get-nsd-fields';

export const spellsFields: Field[] = [
    {
        type: 'collapsible',
        label: 'Spells',
        fields: [
            {
                type: 'collapsible',
                label: 'Spell Slots',
                fields: [
                    {
                        type: 'array',
                        name: 'spellSlots',
                        fields: [
                            {
                                type: 'select',
                                name: 'spellSlotLevel',
                                required: true,
                                options: [
                                    option('Cantrip'),
                                    option('1st'),
                                    option('2nd'),
                                    option('3rd'),
                                    option('4th'),
                                    option('5th'),
                                    option('6th'),
                                    option('7th'),
                                    option('8th'),
                                    option('9th'),
                                ],
                            },

                            //TODO: Validate that current is less than or equal to max
                            {
                                type: 'number',
                                name: 'currentSpellSlots',
                                min: 0,
                            },

                            {
                                type: 'number',
                                name: 'maxSpellSlots',
                                min: 0,
                                max: 5,
                            },
                        ],
                    },
                ],
            },

            {
                type: 'collapsible',
                label: 'Spells',
                fields: [
                    {
                        type: 'array',
                        name: 'spells',
                        fields: [
                            ...getNSDFields(),

                            {
                                type: 'number',
                                name: 'level',
                                min: 0,
                                max: 12, // 10th-12th level slots to support homebrew
                            },

                            {
                                type: 'checkbox',
                                name: 'prepared',
                            },

                            {
                                type: 'select',
                                name: 'school',
                                options: [
                                    option('Abjuration'),
                                    option('Conjuration'),
                                    option('Divination'),
                                    option('Enchantment'),
                                    option('Evocation'),
                                    option('Illusion'),
                                    option('Necromancy'),
                                    option('Transmutation'),
                                    option('Dunamancy'),
                                    option('Other'),
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
