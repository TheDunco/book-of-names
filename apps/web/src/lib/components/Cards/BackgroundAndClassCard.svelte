<script lang="ts">
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
	import { guardValue, toInitialCase } from '$lib/utils';
	import Card from '../Shared/Card.svelte';
	import LabelValue from '../Shared/LabelValue.svelte';

	export let character: FifthEditionCharacter;
	export let delay: number;

	const strength = character.AbilityScoresAndSkills.abilityScores.strength;
</script>

<Card title="Background & Class" {delay}>
	<div class="flex justify-between md:flex-row">
		<div class="flex flex-col gap-4">
			<LabelValue label="Background">
				{guardValue(character.character.background)}
			</LabelValue>
			<LabelValue label="Alignment">
				{guardValue(character.character.alignment)
					.replace('-', ' ')
					.split(' ')
					.map(toInitialCase)
					.join(' ')}
			</LabelValue>
			<LabelValue label="Class">
				{#each character.character.classes as indivClass, i}
					<span>
						<span class="text-c-gold">{guardValue(indivClass.levels)}</span>
						{`${guardValue(indivClass.class)}${
							character.character.classes.length > 1 && i < character.character.classes.length - 1
								? ','
								: ''
						}`}
					</span>
				{/each}
			</LabelValue>
		</div>
	</div>

	<div class="mt-8 flex flex-col gap-4">
		<LabelValue label="Languages">
			{guardValue(character.character.languages)}
		</LabelValue>
		<LabelValue label="Proficiencies">
			{guardValue(character.character.proficiencies)}
		</LabelValue>
	</div>
</Card>
