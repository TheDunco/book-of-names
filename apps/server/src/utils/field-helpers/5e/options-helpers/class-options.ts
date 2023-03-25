import { Option } from 'payload/dist/fields/config/types';

const option = (name: string): Option => {
  return {
    label: name,
    value: name.toLowerCase().replaceAll(' ', '-'),
  };
};

export const classOptions = [
  option('Artificer'),
  option('Barbarian'),
  option('Bard'),
  option('Blood Hunter'),
  option('Cleric'),
  option('Druid'),
  option('Fighter'),
  option('Monk'),
  option('Paladin'),
  option('Ranger'),
  option('Rogue'),
  option('Sorcerer'),
  option('Warlock'),
  option('Wizard'),
  option('Custom'),
];
