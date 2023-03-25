import { Tab } from 'payload/dist/fields/config/types';
import { abilityScoresFields } from '../field-helpers/ability-scores-fields';
import { skillsFields } from '../field-helpers/skills-fields';

export const abilityScoresAndSkillsTab: Tab = {
    name: 'AbilityScoresAndSkills',
    label: 'Ability Scores & Skills',
    fields: [
        {
            label: 'Ability Scores',
            type: 'collapsible',
            fields: [...abilityScoresFields],
            required: true,
        },

        {
            type: 'collapsible',
            label: 'Skills',
            fields: [...skillsFields],
        },
    ],
};
