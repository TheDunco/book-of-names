import { Field } from 'payload/types';

export const abilityScoreField = (name: string): Field => {
    return {
        type: 'group',
        name: name,
        fields: [
            {
                name: `${name}Score`,
                type: 'number',
                defaultValue: 10,
                min: 1,
                max: 30,
            },

            {
                name: `${name}Modifier`,
                type: 'number',
            },

            {
                name: `${name}SavingThrowProficiency`,
                type: 'checkbox',
            },
        ],
    };
};

export const abilityScoresFields: Field[] = [
    {
        name: 'abilityScores',
        type: 'group',
        fields: [
            {
                type: 'row',
                fields: [abilityScoreField('intelligence'), abilityScoreField('wisdom'), abilityScoreField('charisma')],
            },

            {
                type: 'row',
                fields: [
                    abilityScoreField('strength'),
                    abilityScoreField('dexterity'),
                    abilityScoreField('constitution'),
                ],
            },
        ],
    },
];
