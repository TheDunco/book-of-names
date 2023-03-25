<script lang="ts">
	import { fly } from 'svelte/transition';
	import { sineInOut as easing } from 'svelte/easing';
	import clsx from 'clsx';
	import { onMount } from 'svelte';

	export let title: string | undefined;
	export let removeMargin: boolean = false;
	export let delay = 0;

	let loading = true;
	onMount(() => {
		loading = false;
	});
</script>

{#if loading}
	<div />
{:else}
	<div
		in:fly={{ duration: 300, x: 200, easing, delay }}
		class={clsx('rounded-standard bg-c-near-white dark:bg-c-near-black', {
			'm-2 md:m-4': !removeMargin
		})}
		on:dblclick={null}
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
