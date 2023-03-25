import { Field, Tab } from 'payload/dist/fields/config/types';
import { diceOptions } from '../../diceTypes';

const getStatsFields = (name: string): Field[] => [
    {
        type: 'select',
        name: `${name}DiceType`,
        required: true,
        options: diceOptions,
    },

    {
        type: 'number',
        name: `${name}Stat`,
    },

    {
        type: 'select',
        name: `${name}MagicDie`,
        options: diceOptions,
        defaultValue: 'd4',
    },

    {
        type: 'select',
        name: `${name}CommonSenseDie`,
        options: diceOptions,
        defaultValue: 'd4',
    },
];

export const statsTab: Tab = {
    name: 'stats',
    label: 'Stats',
    fields: [
        {
            type: 'group',
            name: 'stats',
            label: 'Stats',
            validate: (value) => {
                if (!value) {
                    return 'Stats are required';
                }
                const { brains, brawn, charm, fight, flight, grit } = value;
                const stats = [brains, brawn, charm, fight, flight, grit];
                const err = stats.some((stat) => {
                    const { diceType } = stat;
                    return stats.some((otherStat) => {
                        const { diceType: otherDiceType } = otherStat;
                        return diceType === otherDiceType;
                    });
                });
                if (err) {
                    console.log('err', err);
                    return 'You cannot have two stats with the same dice type';
                }
                return true;
            },
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            type: 'group',
                            name: 'fight',
                            fields: getStatsFields('fight'),
                        },

                        {
                            type: 'group',
                            name: 'flight',
                            fields: getStatsFields('flight'),
                        },
                    ],
                },

                {
                    type: 'row',
                    fields: [
                        {
                            type: 'group',
                            name: 'brains',
                            fields: getStatsFields('brains'),
                        },

                        {
                            type: 'group',
                            name: 'brawn',
                            fields: getStatsFields('brawn'),
                        },
                    ],
                },

                {
                    type: 'row',
                    fields: [
                        {
                            type: 'group',
                            name: 'charm',
                            fields: getStatsFields('charm'),
                        },

                        {
                            type: 'group',
                            name: 'grit',
                            fields: getStatsFields('grit'),
                        },
                    ],
                },
            ],
        },
    ],
};
