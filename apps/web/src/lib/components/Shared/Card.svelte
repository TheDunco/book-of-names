<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { sineInOut as easing } from 'svelte/easing';
	import clsx from 'clsx';

	export let title: string | undefined;
	export let removeMargin: boolean = false;

	let zoom = false;
	const toggleZoom = () => (zoom = !zoom);

	let loading = true;
	onMount(() => {
		loading = false;
	});
	export let delay = 0;
</script>

{#if loading}
	<div />
{:else}
	<div
		in:fly={{ duration: 300, x: 200, easing, delay }}
		class={clsx(
			'rounded-standard max-h-[500px] overflow-y-auto bg-c-near-white dark:bg-c-near-black',
			{
				'm-2 md:m-4': !removeMargin,
				'z-50 scale-125 drop-shadow-2xl': zoom
			}
		)}
		on:dblclick={toggleZoom}
	>
		{#if title}
			<h2
				class="flex w-full items-center select-none justify-center pt-4 align-middle font-cuprum text-2xl text-c-caption-gray"
			>
				{title}
			</h2>
		{/if}
		<div class="px-4 pb-4 pt-2 md:px-8 md:pb-8">
			<slot />
		</div>
	</div>
{/if}
