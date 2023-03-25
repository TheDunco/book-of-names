<script>
	import { fly, scale } from 'svelte/transition';
	import { sineInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	const dateYear = new Date().getFullYear();

	let loading = true;

	onMount(() => {
		loading = false;
	});
</script>

{#if loading}
	<div />
{:else}
	<footer
		class="mx-auto mt-8 w-full max-w-7xl py-4 text-center font-fira-mono font-thin text-c-caption-gray"
	>
		<div
			class="mb-4 border-t border-c-light-gray"
			in:scale={{ duration: 1000, easing: sineInOut }}
		/>
		<div class="items-center text-center" in:fly={{ duration: 300, easing: sineInOut, y: 200 }}>
			© Copyright {dateYear} Duncan&nbsp;Van&nbsp;Keulen &bull;&nbsp;{get(page).data.appVersion}
		</div>
	</footer>
{/if}
