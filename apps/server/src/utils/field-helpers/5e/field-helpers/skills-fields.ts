import { Field } from 'payload/types';
import { getNSDFields } from './get-nsd-fields';

const skill = (name: string, label?: string): Field[] => [
    {
        label: label ? label : name,
        type: 'collapsible',
        fields: [
            {
                type: 'group',
                name: name.slice(0, 1).toLowerCase() + name.slice(1),
                fields: [
                    ...getNSDFields(name),

                    //TODO: Validate that only one of these is checked
                    {
                        type: 'row',
                        fields: [
                            {
                                type: 'checkbox',
                                name: 'halfProficient',
                            },

                            {
                                name: 'proficient',
                                type: 'checkbox',
                            },

                            {
                                type: 'checkbox',
                                name: 'expertise',
                            },
                        ],
                    },

                    {
                        name: 'bonus',
                        type: 'number',
                        defaultValue: 0,
                        admin: {
                            width: '30%',
                        },
                    },

                    //TODO: Validate that only one of these is checked
                    {
                        type: 'row',
                        fields: [
                            {
                                type: 'checkbox',
                                name: 'advantage',
                            },

                            {
                                type: 'checkbox',
                                name: 'disadvantage',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

//TODO: Make these collapsibles
export const skillsFields: Field[] = [
    {
        type: 'group',
        name: 'intelligenceSkills',
        fields: [
            ...skill('Arcana'),
            ...skill('History'),
            ...skill('Investigation'),
            ...skill('Nature'),
            ...skill('Religion'),
        ],
    },

    {
        type: 'group',
        name: 'wisdomSkills',
        fields: [
            ...skill('AnimalHandling', 'Animal Handling'),
            ...skill('Insight'),
            ...skill('Medicine'),
            ...skill('Perception'),
            ...skill('Survival'),
        ],
    },

    {
        type: 'group',
        name: 'charismaSkills',
        fields: [...skill('Deception'), ...skill('Intimidation'), ...skill('Performance'), ...skill('Persuasion')],
    },

    {
        type: 'group',
        name: 'dexteritySkills',
        fields: [...skill('Acrobatics'), ...skill('SleightOfHand', 'Sleight of Hand'), ...skill('Stealth')],
    },
];
