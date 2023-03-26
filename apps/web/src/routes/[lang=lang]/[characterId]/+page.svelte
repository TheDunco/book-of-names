<script lang="ts">
	import AbilityScoresCard from '$lib/components/Cards/AbilityScoresCard.svelte';
	import BackgroundAndClassCard from '$lib/components/Cards/BackgroundAndClassCard.svelte';
	import GeneralSummaryCard from '$lib/components/Cards/GeneralSummaryCard.svelte';
	import JournalCard from '$lib/components/Cards/JournalCard.svelte';
	import SkillsCard from '$lib/components/Cards/SkillsCard/SkillsCard.svelte';
	import VisualAppearanceCard from '$lib/components/Cards/VisualAppearanceCard.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import SpellsCard from '$lib/components/Cards/SpellsCard.svelte';
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
	import FeatsCard from '$lib/components/Cards/FeatsCard.svelte';
	import AbilitiesCard from '$lib/components/Cards/AbilitiesCard.svelte';
	const delayFactor = 30;

	export let data;

	const character: FifthEditionCharacter = data.props?.character;
	localStorage.setItem('character', JSON.stringify(character));

	const showSpells =
		character.combat.spells?.length > 0 ??
		(false || character.combat.spellSlots?.length > 0) ??
		false;
	const showJournal = character.journalChapters?.length > 0 ?? false;
	const showFeats = character.combat.feats?.length > 0 ?? false;
	const showAbilities = character.combat.abilities?.length > 0 ?? false;
</script>

<div
	class="mx-auto max-w-7xl px-4 transition-all duration-300 ease-in-out md:px-6 lg:grid lg:grid-cols-2 xl:px-0"
>
	<GeneralSummaryCard {character} delay={delayFactor} />
	<VisualAppearanceCard {character} delay={2 * delayFactor} />
	<BackgroundAndClassCard {character} delay={3 * delayFactor} />
	<AbilityScoresCard {character} delay={4 * delayFactor} />
	<SkillsCard {character} delay={5 * delayFactor} />
	{#if showJournal}
		<JournalCard {character} delay={6 * delayFactor} />
	{/if}
	{#if showSpells}
		<SpellsCard {character} delay={7 * delayFactor} />
	{/if}
	{#if showFeats}
		<FeatsCard {character} delay={8 * delayFactor} />
	{/if}
	{#if showAbilities}
		<AbilitiesCard {character} delay={9 * delayFactor} />
	{/if}
</div>

<Footer />
