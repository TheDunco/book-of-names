import { Tab } from 'payload/dist/fields/config/types';

export const schoolBagTab: Tab = {
    name: 'schoolBag',
    label: 'School Bag',
    fields: [
        {
            type: 'collapsible',
            label: 'School Bag',
            fields: [
                {
                    type: 'array',
                    name: 'items',
                    fields: [
                        {
                            type: 'textarea',
                            name: 'item',
                        },

                        {
                            type: 'number',
                            name: 'quantity',
                        },
                    ],
                },
            ],
        },
    ],
};
