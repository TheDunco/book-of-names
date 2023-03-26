<script lang="ts">
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
	import Card from '../Shared/Card.svelte';
	import Nsd from '../Shared/NSD.svelte';

	export let character: FifthEditionCharacter;
	export let delay = 0;

	const spells = character.combat.spells;
	const spellSlots = character.combat.spellSlots;
</script>

<!-- TODO: Add spell slot MultiSelects (really just checkboxes) -->
<!-- TODO: Add prepared logic and total prepared spells -->
<Card title="Spells" {delay}>
	{#each spellSlots as slot, i}
		<div class="mb-8">
			<h3 class="font-raleway text-c-caption-gray">
				{slot.spellSlotLevel === 'cantrip' ? 'Cantrips' : `${slot.spellSlotLevel} Level`}
			</h3>
			<div class="flex flex-col w-full p-5 rounded-standard bg-c-card-light dark:bg-c-dark-gray">
				{#each spells as spell}
					{#if spell.level === i}
						<Nsd NSD={spell} />
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</Card>
