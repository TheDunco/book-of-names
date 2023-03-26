<script lang="ts">
	import GeneralSummaryCard from '$lib/components/Cards/GeneralSummaryCard.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import type { FifthEditionCharacter } from '../../../../../packages/types/payload-types';

	export let data;

	const characters: FifthEditionCharacter[] = data.props?.characters.docs;
</script>

<h1
	class="bold mb-6 max-w-sm mx-auto cursor-default text-center font-cuprum text-6xl text-c-gold hover:-skew-x-2 hover:before:content-['['] hover:after:content-[']']"
	on:click={() => {
		window.location.reload();
	}}
	on:keydown={(e) => {
		if (e.key === 'Enter' || e.key === 'R') {
			window.location.reload();
		}
	}}
>
	Dashboard
</h1>

<div
	class="mx-auto max-w-7xl px-4 transition-all duration-100 ease-in-out md:px-6 lg:grid lg:grid-cols-2 xl:px-0"
>
	{#each characters as char, i}
		<a
			href={`/en/${char.id}`}
			class="m-4 rounded-standard h-fit border-c-gold transition-[ring-width_0.1s_ease_in_out] hover:ring hover:ring-c-gold hover:drop-shadow-lg"
		>
			<GeneralSummaryCard detail={false} removeMargin={true} delay={i * 15} character={char} />
		</a>
	{/each}
</div>

<Footer />
