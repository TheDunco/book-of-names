/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    'fifth-edition-character': FifthEditionCharacter;
    'kids-on-brooms-character': KidsOnBroomsCharacter;
    campaigns: Campaign;
    notes: Note;
    media: Media;
    users: User;
  };
  globals: {};
}
export interface FifthEditionCharacter {
  id: string;
  name: string;
  pictures?: string[] | Media[];
  character: {
    overallLevel: number;
    xp?: number;
    proficiencyBonus?: number;
    armorClass?: number;
    initiative?: number;
    speed?: number;
    flySpeed?: number;
    swimSpeed?: number;
    inspiration?: boolean;
    race?: string;
    pronouns?: string;
    classes: {
      class?:
        | 'artificer'
        | 'barbarian'
        | 'bard'
        | 'blood-hunter'
        | 'cleric'
        | 'druid'
        | 'fighter'
        | 'monk'
        | 'paladin'
        | 'ranger'
        | 'rogue'
        | 'sorcerer'
        | 'warlock'
        | 'wizard'
        | 'custom';
      levels?: number;
      id?: string;
    }[];
    alignment?:
      | 'lawful-good'
      | 'neutral-good'
      | 'chaotic-good'
      | 'lawful-neutral'
      | 'true-neutral'
      | 'chaotic-neutral'
      | 'lawful-evil'
      | 'neutral-evil'
      | 'chaotic-evil';
    background?:
      | 'acolyte'
      | 'anthropologist'
      | 'archaeologist'
      | 'athlete'
      | 'charlatan'
      | 'city-watch'
      | 'clan-crafter'
      | 'cloistered-scholar'
      | 'courtier'
      | 'criminal'
      | 'entertainer'
      | 'faceless'
      | 'faction-agent'
      | 'far-traveler'
      | 'feylost'
      | 'fisher'
      | 'folk-hero'
      | 'gladiator'
      | 'guild-artisan'
      | 'guild-merchant'
      | 'haunted-one'
      | 'hermit'
      | 'house-agent'
      | 'inheritor'
      | 'investigator-(scag)'
      | 'investigator-(vrgr)'
      | 'knight'
      | 'knight-of-the-order'
      | 'marine'
      | 'mercenary-veteran'
      | 'noble'
      | 'outlander'
      | 'pirate'
      | 'sage'
      | 'sailor'
      | 'shipwright'
      | 'smuggler'
      | 'soldier'
      | 'spy'
      | 'urban-bounty-hunter'
      | 'urchin'
      | 'uthgardt-tribe-member'
      | 'waterdhavian-noble'
      | 'witchlight-hand'
      | 'black-fist-double-agent'
      | 'dragon-casualty'
      | 'iron-route-bandit'
      | 'phlan-insurgent'
      | 'stojanow-prisoner'
      | 'ticklebelly-nomad'
      | 'caravan-specialist'
      | 'earthspur-miner'
      | 'harborfolk'
      | 'mulmaster-aristocrat'
      | 'phlan-refugee'
      | 'cormanthor-refugee'
      | 'gate-urchin'
      | 'hillsfar-merchant'
      | 'hillsfar-smuggler'
      | 'secret-identity'
      | 'shade-fanatic'
      | 'trade-sheriff'
      | 'gate-warden'
      | 'giant-foundling'
      | 'knight-of-solamnia'
      | 'mage-of-high-sorcery'
      | 'planar-philosopher'
      | 'rune-carver'
      | 'ashari'
      | "celebrity-adventurer's-scion"
      | 'failed-merchant'
      | 'gambler'
      | 'plaintiff'
      | 'rival-intern'
      | 'dissenter'
      | 'initiate'
      | 'vizier'
      | 'inquisitor'
      | 'azorius-functionary'
      | 'boros-legionnaire'
      | 'dimir-operative'
      | 'golgari-agent'
      | 'gruul-anarch'
      | 'izzet-engineer'
      | 'orzhov-representative'
      | 'rakdos-cultist'
      | 'selesnya-initiate'
      | 'simic-scientist'
      | 'lorehold-student'
      | 'prismari-student'
      | 'quandrix-student'
      | 'silverquill-student'
      | 'witherbloom-student'
      | 'grinner'
      | 'volstrucker-agent'
      | 'astral-drifter'
      | 'wildspacer';
    age?: number;
    height?: string;
    weight?: string;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gargantuan';
    eyes?: string;
    hair?: string;
    skin?: string;
    clothes?: string;
    other?: string;
    languages?: string;
    proficiencies?: string;
  };
  AbilityScoresAndSkills: {
    abilityScores: {
      intelligence: {
        intelligenceScore?: number;
        intelligenceModifier?: number;
        intelligenceSavingThrowProficiency?: boolean;
      };
      wisdom: {
        wisdomScore?: number;
        wisdomModifier?: number;
        wisdomSavingThrowProficiency?: boolean;
      };
      charisma: {
        charismaScore?: number;
        charismaModifier?: number;
        charismaSavingThrowProficiency?: boolean;
      };
      strength: {
        strengthScore?: number;
        strengthModifier?: number;
        strengthSavingThrowProficiency?: boolean;
      };
      dexterity: {
        dexterityScore?: number;
        dexterityModifier?: number;
        dexteritySavingThrowProficiency?: boolean;
      };
      constitution: {
        constitutionScore?: number;
        constitutionModifier?: number;
        constitutionSavingThrowProficiency?: boolean;
      };
    };
    skills: {
      arcana: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      history: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      investigation: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      nature: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      religion: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      animalHandling: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      insight: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      medicine: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      perception: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      survival: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      deception: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      intimidation: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      performance: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      persuasion: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      acrobatics: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      sleightOfHand: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      stealth: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
      athletics: {
        halfProficient?: boolean;
        proficient?: boolean;
        expertise?: boolean;
        bonus?: number;
        advantage?: boolean;
        disadvantage?: boolean;
      };
    };
  };
  combat: {
    health: {
      currentHitPoints?: number;
      maxHitPoints?: number;
      temporaryHitPoints?: number;
      hitDice: {
        dieType?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        currentHitDice?: number;
      };
      deathSaves: {
        deathSavesSuccesses?: number;
        deathSavesFailures?: number;
      };
    };
    proficiency: {
      castingAbility?: 'intelligence' | 'wisdom' | 'charisma' | 'strength' | 'dexterity' | 'constitution';
      proficiencyBonus?: number;
      attackBonus?: number;
      saveDC?: number;
      id?: string;
    }[];
    spellSlots: {
      spellSlotLevel: 'cantrip' | '1st' | '2nd' | '3rd' | '4th' | '5th' | '6th' | '7th' | '8th' | '9th';
      currentSpellSlots?: number;
      maxSpellSlots?: number;
      id?: string;
    }[];
    spells: {
      name?: string;
      detail?: string;
      summary?: string;
      description?: {
        [k: string]: unknown;
      }[];
      level?: number;
      prepared?: boolean;
      school?:
        | 'abjuration'
        | 'conjuration'
        | 'divination'
        | 'enchantment'
        | 'evocation'
        | 'illusion'
        | 'necromancy'
        | 'transmutation'
        | 'dunamancy'
        | 'other';
      id?: string;
    }[];
    actions: {
      name?: string;
      detail?: string;
      summary?: string;
      description?: {
        [k: string]: unknown;
      }[];
      type?: 'melee' | 'ranged' | 'spell' | 'power' | 'special' | 'potion' | 'magic-item' | 'other';
      range?: string;
      proficient?: boolean;
      attack: {
        abilityScore?: 'intelligence' | 'wisdom' | 'charisma' | 'dexterity' | 'strength' | 'constitution';
        miscModifier?: number;
        magicModifier?: number;
        attackBonus?: number;
      };
      damage: {
        diceCount?: number;
        diceType?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        damageAbilityScore?: 'intelligence' | 'wisdom' | 'charisma' | 'dexterity' | 'strength' | 'constitution';
        damageType?:
          | 'acid'
          | 'bludgeoning'
          | 'cold'
          | 'fire'
          | 'force'
          | 'lightning'
          | 'necrotic'
          | 'piercing'
          | 'poison'
          | 'psychic'
          | 'radiant'
          | 'slashing'
          | 'thunder'
          | 'other';
        damageMiscModifier?: number;
        damageMagicModifier?: number;
        damageBonus?: number;
      };
      id?: string;
    }[];
    defenses: {
      defenseType?: 'heavy-armor' | 'medium-armor' | 'light-armor' | 'natural-armor' | 'shield' | 'misc';
      base?: number;
      bonus?: number;
      magical?: boolean;
      magicalBonus?: number;
      id?: string;
    }[];
    abilities: {
      name?: string;
      detail?: string;
      summary?: string;
      description?: {
        [k: string]: unknown;
      }[];
      id?: string;
    }[];
    feats: {
      featName?: string;
      featSummary?: string;
      featDescription?: string;
      id?: string;
    }[];
  };
  money: {
    platinum?: number;
    gold?: number;
    silver?: number;
    copper?: number;
  };
  equipment: {
    name?: string;
    summary?: string;
    description?: {
      [k: string]: unknown;
    }[];
    quantity?: number;
    equipped?: boolean;
    carried?: boolean;
    weight?: number;
    value?: number;
    id?: string;
  }[];
  statusEffects: {
    statusEffect?:
      | 'blinded'
      | 'charmed'
      | 'deafened'
      | 'exhaustion'
      | 'frightened'
      | 'grappled'
      | 'incapacitated'
      | 'invisible'
      | 'paralyzed'
      | 'petrified'
      | 'poisoned'
      | 'prone'
      | 'restrained'
      | 'stunned'
      | 'unconscious'
      | 'dead'
      | 'other';
    id?: string;
  }[];
  trackables: {
    name?: string;
    detail?: string;
    summary?: string;
    description?: {
      [k: string]: unknown;
    }[];
    maximum?: number;
    current?: number;
    type?: 'checkboxes' | 'number';
    resetsOnShortRest?: boolean;
    resetsOnLongRest?: boolean;
    id?: string;
  }[];
  journalChapters: {
    name?: string;
    journalEntries: {
      pictures?: string[] | Media[];
      name?: string;
      detail?: string;
      summary?: string;
      description?: {
        [k: string]: unknown;
      }[];
      id?: string;
    }[];
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
export interface Media {
  id: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes: {
    thumbnail: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    card: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    tablet: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}
export interface KidsOnBroomsCharacter {
  id: string;
  name: string;
  pictures?: string[] | Media[];
  adversityTokens?: number;
  stats: {
    stats: {
      fight: {
        fightDiceType: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        fightStat?: number;
        fightMagicDie?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        fightCommonSenseDie?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
      };
      flight: {
        flightDiceType: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        flightStat?: number;
        flightMagicDie?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        flightCommonSenseDie?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
      };
      brains: {
        brainsDiceType: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        brainsStat?: number;
        brainsMagicDie?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        brainsCommonSenseDie?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
      };
      brawn: {
        brawnDiceType: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        brawnStat?: number;
        brawnMagicDie?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        brawnCommonSenseDie?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
      };
      charm: {
        charmDiceType: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        charmStat?: number;
        charmMagicDie?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        charmCommonSenseDie?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
      };
      grit: {
        gritDiceType: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        gritStat?: number;
        gritMagicDie?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
        gritCommonSenseDie?: 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20';
      };
    };
  };
  character: {
    Trope?: string;
    age?: number;
    pronouns?: string;
    fear?: string;
    motivation?: string;
    description?: string;
    grade?: string;
    broomName?: string;
    broomLook?: string;
    mechanicalBenefit?: string;
    wandWood?: string;
    wandCore?: string;
    wandLength?: string;
    wandFlexibility?: string;
    wandAppearance?: string;
    animalFamiliar?: string;
  };
  schoolBag: {
    items: {
      item?: string;
      quantity?: number;
      id?: string;
    }[];
  };
  createdAt: string;
  updatedAt: string;
}
export interface Campaign {
  id: string;
  name: string;
  players?: string[] | User[];
  characters?:
    | (
        | {
            value: string;
            relationTo: 'fifth-edition-character';
          }
        | {
            value: string;
            relationTo: 'kids-on-brooms-character';
          }
      )[]
    | (
        | {
            value: FifthEditionCharacter;
            relationTo: 'fifth-edition-character';
          }
        | {
            value: KidsOnBroomsCharacter;
            relationTo: 'kids-on-brooms-character';
          }
      )[];
  media?: string[] | Media[];
  notes?: string[] | Note[];
  createdAt: string;
  updatedAt: string;
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  roles?: ('admin' | 'player' | 'dm')[];
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}
export interface Note {
  id: string;
  name: string;
  note?: {
    [k: string]: unknown;
  }[];
  media?: string[] | Media[];
  campaign?: string | Campaign;
  character?: string[] | FifthEditionCharacter[];
  creator?: string | User;
  createdAt: string;
  updatedAt: string;
}
