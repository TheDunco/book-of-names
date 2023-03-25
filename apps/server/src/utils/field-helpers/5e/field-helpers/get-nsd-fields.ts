import { Field } from 'payload/types';

type NSDOptions = {
    noDetail?: boolean;
    noSummary?: boolean;
    noDescription?: boolean;
};

export const getNSDFields = (name?: string, options?: NSDOptions): Field[] => [
    {
        type: 'text',
        name: name ? `${name}Name` : 'name',
    },

    options?.noDetail
        ? null
        : {
              type: 'text',
              name: name ? `${name}Detail` : 'detail',
          },

    options?.noSummary
        ? null
        : {
              type: 'text',
              name: name ? `${name}Summary` : 'summary',
          },

    options?.noDescription
        ? null
        : {
              type: 'richText',
              name: name ? `${name}Description` : 'description',
          },
];
