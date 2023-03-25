import { Field } from 'payload/types';
import { getNSDFields } from './get-nsd-fields';

export const abilitiesFields: Field[] = [
    {
        type: 'array',
        name: 'abilities',
        fields: getNSDFields(),
    },
];
