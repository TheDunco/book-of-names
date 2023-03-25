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
	const delayFactor = 30;

	export let data;

	const character: FifthEditionCharacter = data.props?.character;
</script>

<div
	class="mx-auto max-w-7xl px-2 transition-all duration-300 ease-in-out md:px-4 lg:grid lg:grid-cols-2 xl:px-0"
>
	<GeneralSummaryCard {character} delay={delayFactor} />
	<VisualAppearanceCard {character} delay={2 * delayFactor} />
	<BackgroundAndClassCard {character} delay={3 * delayFactor} />
	<AbilityScoresCard {character} delay={4 * delayFactor} />
	<SkillsCard {character} delay={5 * delayFactor} />
	<JournalCard {character} delay={6 * delayFactor} />
	<SpellsCard {character} delay={7 * delayFactor} />
</div>

<Footer />
