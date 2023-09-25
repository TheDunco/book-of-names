<script lang="ts">
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
	import Modal from './Modal.svelte';
	import { Slate, Editable, withSvelte } from 'svelte-slate';
	import { createEditor } from 'slate';
	import { toInitialCase } from '$lib/utils';
	import clsx from 'clsx';
	import { enhance } from '$app/forms';
	const editor = withSvelte(createEditor());

	export let fade = false;
	export let NSD: FifthEditionCharacter['combat']['abilities'][0] & {
		school?: FifthEditionCharacter['combat']['spells'][0]['school'];
	};
	let value = NSD.description;
</script>

<Modal>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span
		slot="trigger"
		class={clsx('inline-flex cursor-pointer flex-wrap break-words py-1 text-sm hover:opacity-75', {
			'opacity-30': fade
		})}
	>
		{#if NSD?.name}
			<h4 class="mr-1">{NSD.name}</h4>
		{/if}
		{#if NSD?.school}
			<div class="text-c-caption-gray">
				[<i>{toInitialCase(NSD.school)}</i>]&nbsp;
			</div>
		{/if}
		{#if NSD?.detail}
			<p class="text-c-gold">({NSD.detail}) -</p>
		{/if}
		{#if NSD?.summary}
			<p class="text-c-caption-gray">{NSD?.detail ? '\xa0' : ' - '}{NSD.summary}</p>
		{/if}
	</span>
	<form slot="content" method="POST" use:enhance>
		<span class="mb-5 inline-flex flex-wrap text-2xl">
			{#if NSD?.name}
				<h4 class="mr-1">{NSD.name}</h4>
			{/if}
			{#if NSD?.school}
				<div class="text-c-caption-gray">
					[<i>{toInitialCase(NSD.school)}</i>]&nbsp;
				</div>
			{/if}
			{#if NSD?.detail}
				<p class="text-c-gold">&nbsp;({NSD.detail}) -</p>
			{/if}
			{#if NSD?.summary}
				<p class="text-c-caption-gray">{NSD?.detail ? '\xa0' : '\xa0-\xa0'}{NSD.summary}</p>
			{/if}
		</span>
		<div class="border-c-gold border-l-2 pl-3">
			{#if NSD?.description}
				<Slate {editor} bind:value>
					<Editable placeholder="Enter some plain text..." />
				</Slate>
			{/if}
		</div>
		<button
			formaction="?/NSD"
			class="hover:bg-c-gold border-c-background-light hover:shadow-hover mt-5 rounded-md border-2 p-2 hover:border-transparent"
		>
			Save
		</button>
		<button
			class="hover:bg-c-red border-c-background-light hover:shadow-hover mt-5 rounded-md border-2 p-2 hover:border-transparent hover:bg-opacity-30"
		>
			Cancel
		</button>
	</form>
</Modal>
