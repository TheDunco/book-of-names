import { Field } from 'payload/types';
import { getNSDFields } from './get-nsd-fields';

export const featFields: Field[] = [
    {
        type: 'array',
        name: 'feats',
        fields: getNSDFields(),
    },
];
