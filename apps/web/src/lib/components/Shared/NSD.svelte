<script lang="ts">
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
	import Modal from './Modal.svelte';

	export let NSD: FifthEditionCharacter['combat']['abilities'][0];
	let showDescription = false;
	const showDescriptionModal = () => {
		showDescription = true;
	};
</script>

<Modal>
	<span
		slot="trigger"
		class="inline-flex flex-wrap py-1 text-sm cursor-pointer"
		on:click={showDescriptionModal}
		on:keydown={showDescriptionModal}
	>
		{#if NSD?.name}
			<h4 class="mr-1">{NSD.name}</h4>
		{/if}
		{#if NSD?.detail}
			<p class="text-c-gold">({NSD.detail}) -</p>
		{/if}
		{#if NSD?.summary}
			<p class="text-c-caption-gray">&nbsp;{NSD.summary}</p>
		{/if}
	</span>
	<div slot="content">
		{#if NSD?.description}
			<p>{NSD.description}</p>
		{/if}
	</div>
</Modal>
