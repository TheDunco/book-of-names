import { Option } from 'payload/dist/fields/config/types';

export const option = (name: string): Option => {
  return {
    label: name,
    value: name.toLowerCase().replaceAll(' ', '-'),
  };
};
