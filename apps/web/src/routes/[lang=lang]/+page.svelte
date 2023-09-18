<script lang="ts">
	import GeneralSummaryCard from '$lib/components/Cards/GeneralSummaryCard.svelte';
	import Footer from '$lib/components/Layout/Footer.svelte';
	import type { FifthEditionCharacter } from '../../../../../packages/types/payload-types';

	export let data;

	const characters: FifthEditionCharacter[] = data.props?.characters.docs;
</script>

<h1
	class="bold font-cuprum text-c-gold mx-auto mb-6 max-w-sm cursor-default text-center text-6xl hover:-skew-x-2 hover:before:content-['['] hover:after:content-[']']"
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
			href={`/en/5e-character/${char.id}`}
			class="rounded-standard border-c-gold hover:ring-c-gold m-4 h-fit transition-[ring-width_0.1s_ease_in_out] hover:ring hover:drop-shadow-lg"
		>
			<GeneralSummaryCard detail={false} removeMargin={true} delay={i * 15} character={char} />
		</a>
	{/each}
</div>

<Footer />
