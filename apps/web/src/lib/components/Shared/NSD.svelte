<script lang="ts">
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
	import Modal from './Modal.svelte';
	import { Slate, Editable, withSvelte } from 'svelte-slate';
	import { createEditor } from 'slate';
	import { toInitialCase } from '$lib/utils';
	const editor = withSvelte(createEditor());

	export let NSD: FifthEditionCharacter['combat']['abilities'][0] & {
		school?: FifthEditionCharacter['combat']['spells'][0]['school'];
	};
	let value = NSD.description;
</script>

<Modal>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span slot="trigger" class="inline-flex hover:opacity-75 flex-wrap py-1 text-sm cursor-pointer">
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
	<div slot="content">
		<div class="inline-flex flex-wrap text-2xl mb-5">
			{#if NSD?.name}
				<h4 class="mr-1">{NSD.name}</h4>
			{/if}
			{#if NSD?.detail}
				<p class="text-c-gold">&nbsp;({NSD.detail}) -</p>
			{/if}
			{#if NSD?.summary}
				<p class="text-c-caption-gray">{NSD?.detail ? '\xa0' : '\xa0-\xa0'}{NSD.summary}</p>
			{/if}
		</div>
		<div class="border-l-2 border-c-gold pl-3">
			{#if NSD?.description}
				<Slate {editor} bind:value>
					<Editable placeholder="Enter some plain text..." />
				</Slate>
			{/if}
		</div>
	</div>
</Modal>
