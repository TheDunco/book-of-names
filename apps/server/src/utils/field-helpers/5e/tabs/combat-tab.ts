import { Tab } from 'payload/dist/fields/config/types';
import { abilitiesFields } from '../field-helpers/abilities-fields';
import { actionsFields } from '../field-helpers/actions-fields';
import { defensesFields } from '../field-helpers/defenses-fields';
import { featFields } from '../field-helpers/feat-fields';
import { healthFields } from '../field-helpers/health-fields';
import { proficiencyFields } from '../field-helpers/proficiency-fields';
import { spellsFields } from '../field-helpers/spells-fields';

export const combatTab: Tab = {
    name: 'combat',
    label: 'Combat',
    fields: [
        ...healthFields,
        ...proficiencyFields,
        ...spellsFields,
        ...actionsFields,
        ...defensesFields,
        ...abilitiesFields,
        ...featFields,
    ],
};
