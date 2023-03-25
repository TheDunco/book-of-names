import { Field } from 'payload/types';

const skill = (name: string, label?: string): Field[] => [
    {
        label: label ? label : name,
        type: 'collapsible',
        fields: [
            {
                type: 'group',
                name: name.slice(0, 1).toLowerCase() + name.slice(1),
                fields: [
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
        name: 'skills',
        fields: [
            ...skill('Arcana'),
            ...skill('History'),
            ...skill('Investigation'),
            ...skill('Nature'),
            ...skill('Religion'),
            ...skill('AnimalHandling', 'Animal Handling'),
            ...skill('Insight'),
            ...skill('Medicine'),
            ...skill('Perception'),
            ...skill('Survival'),
            ...skill('Deception'),
            ...skill('Intimidation'),
            ...skill('Performance'),
            ...skill('Persuasion'),
            ...skill('Acrobatics'),
            ...skill('SleightOfHand', 'Sleight of Hand'),
            ...skill('Stealth'),
            ...skill('Athletics'),
        ],
    },
];
