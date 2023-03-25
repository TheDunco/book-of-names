<script lang="ts">
	import type { FifthEditionCharacter } from '$lib/types/payload-types';
	import { guardValue } from '$lib/utils';
	import Card from '../Shared/Card.svelte';
	import LabelValue from '../Shared/LabelValue.svelte';

	export let character: FifthEditionCharacter;
	export let delay: number;

	const char = character.character;
</script>

<Card title="Visual Appearance" {delay}>
	<div class="grid gap-4 sm:grid-cols-[1fr_4fr]">
		<div class="flex flex-col gap-4">
			<LabelValue label="Age">
				{guardValue(char.age)}
			</LabelValue>
			<LabelValue label="Height">
				{guardValue(char.height)}
			</LabelValue>
			<LabelValue label="Weight">
				{guardValue(char.weight)}
			</LabelValue>
			<LabelValue label="Size">
				{guardValue(char.size)}
			</LabelValue>
		</div>
		<div class="flex flex-col gap-4">
			<LabelValue label="Eyes">
				{guardValue(char.eyes)}
			</LabelValue>
			<LabelValue label="Hair">
				{guardValue(char.skin)}
			</LabelValue>
			<LabelValue label="Clothes">
				{guardValue(char.clothes)}
			</LabelValue>
		</div>
		{#if char.other}
			<LabelValue label="Other">
				{guardValue(char.other)}
			</LabelValue>
		{/if}
	</div>
</Card>
