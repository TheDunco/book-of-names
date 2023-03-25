<script lang="ts">
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
	import Card from '../Shared/Card.svelte';
	import Nsd from '../Shared/NSD.svelte';

	export let character: FifthEditionCharacter;
	export let delay = 0;

	const spells = character.combat.spells;
	const spellSlots = character.combat.spellSlots;
	type SpellsOptions = FifthEditionCharacter['combat']['spellSlots'][0]['spellSlotLevel'];
	const spellSlotsToNumbersMap: Record<SpellsOptions, number> = {
		cantrip: 0,
		'1st': 1,
		'2nd': 2,
		'3rd': 3,
		'4th': 4,
		'5th': 5,
		'6th': 6,
		'7th': 7,
		'8th': 8,
		'9th': 9
	};
</script>

<Card title="Spells" {delay}>
	{#each spellSlots as slot}
		<div class="mb-8">
			<h3 class="font-raleway text-c-caption-gray">
				{slot.spellSlotLevel === 'cantrip' ? 'Cantrips' : `${slot.spellSlotLevel} Level`}
			</h3>
			<div class="flex flex-col w-full p-5 rounded-standard bg-c-card-light dark:bg-c-dark-gray">
				{#each spells as spell}
					<Nsd NSD={spell} />
				{/each}
			</div>
		</div>
	{/each}
</Card>
