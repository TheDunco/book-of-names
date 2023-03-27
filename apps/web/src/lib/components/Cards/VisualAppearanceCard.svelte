<script lang="ts">
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
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
			{#if char.age}
				<LabelValue label="Age">
					{guardValue(char.age)}
				</LabelValue>
			{/if}
			{#if char.height}
				<LabelValue label="Height">
					{guardValue(char.height)}
				</LabelValue>
			{/if}
			{#if char.weight}
				<LabelValue label="Weight">
					{guardValue(char.weight)}
				</LabelValue>
			{/if}
			{#if char.size}
				<LabelValue label="Size">
					{guardValue(char.size)}
				</LabelValue>
			{/if}
		</div>
		<div class="flex flex-col gap-4">
			{#if char.eyes}
				<LabelValue label="Eyes">
					{guardValue(char.eyes)}
				</LabelValue>
			{/if}
			{#if char.skin}
				<LabelValue label="Hair">
					{guardValue(char.skin)}
				</LabelValue>
			{/if}
			{#if char.clothes}
				<LabelValue label="Clothes">
					{guardValue(char.clothes)}
				</LabelValue>
			{/if}
		</div>
		{#if char.other}
			<LabelValue label="Other">
				{guardValue(char.other)}
			</LabelValue>
		{/if}
	</div>
</Card>
