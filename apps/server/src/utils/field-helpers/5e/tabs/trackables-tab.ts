import { Tab } from 'payload/dist/fields/config/types';
import { option } from '../../../option';
import { getNSDFields } from '../field-helpers/get-nsd-fields';
import { statusEffectOptions } from '../options-helpers/status-effects-options';

export const trackablesTab: Tab = {
    label: 'Trackables',
    fields: [
        {
            type: 'collapsible',
            label: 'Status Effects',
            fields: [
                {
                    type: 'array',
                    name: 'statusEffects',
                    fields: [
                        {
                            type: 'select',
                            name: 'statusEffect',
                            options: statusEffectOptions,
                        },
                    ],
                },
            ],
        },

        {
            type: 'array',
            name: 'trackables',
            fields: [
                ...getNSDFields(),

                {
                    type: 'number',
                    name: 'maximum',
                },

                {
                    type: 'number',
                    name: 'current',
                },

                {
                    type: 'select',
                    name: 'type',
                    options: [option('Checkboxes'), option('Number')],
                },

                {
                    type: 'checkbox',
                    name: 'resetsOnShortRest',
                },

                {
                    type: 'checkbox',
                    name: 'resetsOnLongRest',
                },
            ],
        },
    ],
};
