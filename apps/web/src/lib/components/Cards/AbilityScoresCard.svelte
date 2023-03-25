<script lang="ts">
	import type { FifthEditionCharacter } from '$lib/types/payload-types';
	import Card from '../Shared/Card.svelte';
	import ModifierView from '../Shared/ModifierView.svelte';
	import clsx from 'clsx';

	export let character: FifthEditionCharacter;
	export let delay: number;

	const int = character.AbilityScoresAndSkills.abilityScores.intelligence;
	const wis = character.AbilityScoresAndSkills.abilityScores.wisdom;
	const cha = character.AbilityScoresAndSkills.abilityScores.charisma;
	const dex = character.AbilityScoresAndSkills.abilityScores.dexterity;
	const str = character.AbilityScoresAndSkills.abilityScores.strength;
	const con = character.AbilityScoresAndSkills.abilityScores.constitution;
</script>

<Card title="Ability Scores" {delay}>
	<div class="mx-auto grid w-full gap-4 2xs:grid-cols-2 sm:grid-cols-3 sm:gap-12">
		<div class="mx-auto">
			<div class="w-28 text-center font-raleway text-xs text-c-caption-gray">Intelligence</div>
			<div
				class="mt-1 flex h-32 w-28 flex-col justify-around rounded-standard bg-c-card-light p-3 dark:bg-c-dark-gray"
			>
				<span class="inline-flex w-full justify-around">
					<span class="flex items-center text-c-caption-gray">Mod</span>
					<ModifierView modifier={int.intelligenceModifier || 0} />
				</span>
				<span class="inline-flex w-full justify-around">
					<span
						class={clsx('flex items-center text-left text-c-caption-gray', {
							'text-c-gold': int.intelligenceSavingThrowProficiency
						})}
					>
						Save
					</span>
					<ModifierView
						modifier={int.intelligenceSavingThrowProficiency
							? (int.intelligenceModifier ?? 0) + (character.character.proficiencyBonus ?? 0)
							: int.intelligenceModifier || 0}
					/>
				</span>
				<span class="inline-flex w-full justify-around">
					<span class="flex items-center text-left text-c-caption-gray">Score</span>
					<span class="text-xl text-c-near-black dark:text-c-background-light">
						{int.intelligenceScore || 10}
					</span>
				</span>
			</div>
		</div>

		<div class="mx-auto">
			<div class="w-28 text-center font-raleway text-xs text-c-caption-gray">Wisdom</div>
			<div
				class="mt-1 flex h-32 w-28 flex-col justify-around rounded-standard bg-c-card-light p-3 dark:bg-c-dark-gray"
			>
				<span class="inline-flex w-full justify-around">
					<span class="flex items-center text-c-caption-gray">Mod</span>
					<ModifierView modifier={wis.wisdomModifier || 0} />
				</span>
				<span class="inline-flex w-full justify-around">
					<span
						class={clsx('flex items-center text-left text-c-caption-gray', {
							'text-c-gold': wis.wisdomSavingThrowProficiency
						})}
					>
						Save
					</span>
					<ModifierView
						modifier={wis.wisdomSavingThrowProficiency
							? (wis.wisdomModifier ?? 0) + (character.character.proficiencyBonus ?? 0)
							: wis.wisdomModifier || 0}
					/>
				</span>
				<span class="inline-flex w-full justify-around">
					<span class="flex items-center text-left text-c-caption-gray">Score</span>
					<span class="text-xl">
						{wis.wisdomScore || 10}
					</span>
				</span>
			</div>
		</div>

		<div class="mx-auto">
			<div class="w-28 text-center font-raleway text-xs text-c-caption-gray">Charisma</div>
			<div
				class="mt-1 flex h-32 w-28 flex-col justify-around rounded-standard bg-c-card-light p-3 dark:bg-c-dark-gray"
			>
				<span class="inline-flex w-full justify-around">
					<span class="flex items-center text-c-caption-gray">Mod</span>
					<ModifierView modifier={cha.charismaModifier || 0} />
				</span>
				<span class="inline-flex w-full justify-around">
					<span
						class={clsx('flex items-center text-left text-c-caption-gray', {
							'text-c-gold': cha.charismaSavingThrowProficiency
						})}
					>
						Save
					</span>
					<ModifierView
						modifier={cha.charismaSavingThrowProficiency
							? (cha.charismaModifier ?? 0) + (character.character.proficiencyBonus ?? 0)
							: cha.charismaModifier || 0}
					/>
				</span>
				<span class="inline-flex w-full justify-around">
					<span class="flex items-center text-left text-c-caption-gray">Score</span>
					<span class="text-xl">
						{cha.charismaScore || 10}
					</span>
				</span>
			</div>
		</div>

		<div class="mx-auto">
			<div class="w-28 text-center font-raleway text-xs text-c-caption-gray">Dexterity</div>
			<div
				class="mt-1 flex h-32 w-28 flex-col justify-around rounded-standard bg-c-card-light p-3 dark:bg-c-dark-gray"
			>
				<span class="inline-flex w-full justify-around">
					<span class="flex items-center text-c-caption-gray">Mod</span>
					<ModifierView modifier={dex.dexterityModifier || 0} />
				</span>
				<span class="inline-flex w-full justify-around">
					<span
						class={clsx('flex items-center text-left text-c-caption-gray', {
							'text-c-gold': dex.dexteritySavingThrowProficiency
						})}
					>
						Save
					</span>
					<ModifierView
						modifier={dex.dexteritySavingThrowProficiency
							? (dex.dexterityModifier ?? 0) + (character.character.proficiencyBonus ?? 0)
							: dex.dexterityModifier || 0}
					/>
				</span>
				<span class="inline-flex w-full justify-around">
					<span class="flex items-center text-left text-c-caption-gray">Score</span>
					<span class="text-xl">
						{dex.dexterityScore || 10}
					</span>
				</span>
			</div>
		</div>

		<div class="mx-auto">
			<div class="w-28 text-center font-raleway text-xs text-c-caption-gray">Strength</div>
			<div
				class="mt-1 flex h-32 w-28 flex-col justify-around rounded-standard bg-c-card-light p-3 dark:bg-c-dark-gray"
			>
				<span class="inline-flex w-full justify-around">
					<span class="flex items-center text-c-caption-gray">Mod</span>
					<ModifierView modifier={str.strengthModifier || 0} />
				</span>
				<span class="inline-flex w-full justify-around">
					<span
						class={clsx('flex items-center text-left text-c-caption-gray', {
							'text-c-gold': str.strengthSavingThrowProficiency
						})}
					>
						Save
					</span>
					<ModifierView
						modifier={str.strengthSavingThrowProficiency
							? (str.strengthModifier ?? 0) + (character.character.proficiencyBonus ?? 0)
							: str.strengthModifier || 0}
					/>
				</span>
				<span class="inline-flex w-full justify-around">
					<span class="flex items-center text-left text-c-caption-gray">Score</span>
					<span class="text-xl">
						{str.strengthScore || 10}
					</span>
				</span>
			</div>
		</div>

		<div class="mx-auto">
			<div class="w-28 text-center font-raleway text-xs text-c-caption-gray">Constitution</div>
			<div
				class="mt-1 flex h-32 w-28 flex-col justify-around rounded-standard bg-c-card-light p-3 dark:bg-c-dark-gray"
			>
				<span class="inline-flex w-full justify-around">
					<span class="flex items-center text-c-caption-gray">Mod</span>
					<ModifierView modifier={con.constitutionModifier || 0} />
				</span>
				<span class="inline-flex w-full justify-around">
					<span
						class={clsx('flex items-center text-left text-c-caption-gray', {
							'text-c-gold': con.constitutionSavingThrowProficiency
						})}
					>
						Save
					</span>
					<ModifierView
						modifier={con.constitutionSavingThrowProficiency
							? (con.constitutionModifier ?? 0) + (character.character.proficiencyBonus ?? 0)
							: con.constitutionModifier || 0}
					/>
				</span>
				<span class="inline-flex w-full justify-around">
					<span class="flex items-center text-left text-c-caption-gray">Score</span>
					<span class="text-xl">
						{con.constitutionScore || 10}
					</span>
				</span>
			</div>
		</div>
	</div>
</Card>
