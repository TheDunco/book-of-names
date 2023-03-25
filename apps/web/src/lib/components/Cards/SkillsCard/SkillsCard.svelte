<script lang="ts">
	import type { FifthEditionCharacter } from '$lib/types/payload-types';
	import Card from '../../Shared/Card.svelte';
	import Skill from './Skill.svelte';

	export let character: FifthEditionCharacter;
	export let delay: number;

	// int
	const arcanaMod = character.AbilityScoresAndSkills.intelligenceSkills.arcana.bonus || 0;
	const historyMod = character.AbilityScoresAndSkills.intelligenceSkills.history.bonus || 0;
	const investigationMod =
		character.AbilityScoresAndSkills.intelligenceSkills.investigation.bonus || 0;
	const natureMod = character.AbilityScoresAndSkills.intelligenceSkills.nature.bonus || 0;
	const religionMod = character.AbilityScoresAndSkills.intelligenceSkills.religion.bonus || 0;

	// wis
	const animalHandlingMod = character.AbilityScoresAndSkills.wisdomSkills.animalHandling.bonus || 0;
	const insightMod = character.AbilityScoresAndSkills.wisdomSkills.insight.bonus || 0;
	const medicineMod = character.AbilityScoresAndSkills.wisdomSkills.medicine.bonus || 0;
	const perceptionMod = character.AbilityScoresAndSkills.wisdomSkills.perception.bonus || 0;
	const survivalMod = character.AbilityScoresAndSkills.wisdomSkills.survival.bonus || 0;

	// cha
	const deceptionMod = character.AbilityScoresAndSkills.charismaSkills.deception.bonus || 0;
	const intimidationMod = character.AbilityScoresAndSkills.charismaSkills.intimidation.bonus || 0;
	const performanceMod = character.AbilityScoresAndSkills.charismaSkills.performance.bonus || 0;
	const persuasionMod = character.AbilityScoresAndSkills.charismaSkills.persuasion.bonus || 0;

	// dex
	const acrobaticsMod = character.AbilityScoresAndSkills.dexteritySkills.acrobatics.bonus || 0;
	const sleightOfHandMod =
		character.AbilityScoresAndSkills.dexteritySkills.sleightOfHand.bonus || 0;
	const stealthMod = character.AbilityScoresAndSkills.dexteritySkills.stealth.bonus || 0;

	// str
	// const athleticsMod = character.AbilityScoresAndSkills.strengthSkills.athletics.bonus || 0;
	const athleticsMod = 0;
</script>

<Card title="Skills" {delay}>
	<div class="grid grid-cols-4">
		<div class="grid grid-rows-[1fr_repeat(5,_2fr)] border-r border-c-light-gray mr-6">
			<h2 class="font-cuprum mb-1 align-text-bottom">Intelligence</h2>
			<Skill name="Arcana" mod={arcanaMod} />
			<Skill name="History" mod={historyMod} />
			<Skill name="Investigation" mod={investigationMod} />
			<Skill name="Nature" mod={natureMod} />
			<Skill name="Religion" mod={religionMod} />
		</div>
		<div class="grid grid-rows-[1fr_repeat(5,_2fr)] border-r border-c-light-gray mr-6">
			<h2 class="font-cuprum mb-1">Wisdom</h2>
			<Skill name="Animal Handling" mod={animalHandlingMod} />
			<Skill name="Insight" mod={insightMod} />
			<Skill name="Medicine" mod={medicineMod} />
			<Skill name="Perception" mod={perceptionMod} />
			<Skill name="Survival" mod={survivalMod} />
		</div>
		<div class="grid grid-rows-[1fr_repeat(5,_2fr)] border-r border-c-light-gray mr-6">
			<h2 class="font-cuprum mb-1">Dexterity</h2>
			<Skill name="Deception" mod={deceptionMod} />
			<Skill name="Intimidation" mod={intimidationMod} />
			<Skill name="Performance" mod={performanceMod} />
			<Skill name="Persuasion" mod={persuasionMod} />
		</div>
		<div class="grid grid-rows-[1fr_repeat(5,_2fr)]">
			<h2 class="font-cuprum mb-1">Charisma</h2>
			<Skill name="Acrobatics" mod={acrobaticsMod} />
			<Skill name="Sleight of Hand" mod={sleightOfHandMod} />
			<Skill name="Stealth" mod={stealthMod} />
			<div class="row-span-2">
				<h2 class="font-cuprum mb-1 mt-5">Strength</h2>
				<Skill name="Athletics" mod={athleticsMod} />
			</div>
		</div>
	</div>
</Card>
