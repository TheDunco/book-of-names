<script lang="ts">
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
	import Card from '../Shared/Card.svelte';
	import MultiCheckbox from '../Shared/MultiCheckbox/MultiCheckbox.svelte';
	import Nsd from '../Shared/NSD.svelte';

	export let character: FifthEditionCharacter;
	export let delay = 0;

	const spells = character.combat.spells;
	const spellSlots = character.combat.spellSlots;

	const preparedSpellsCount = spells.filter((spell) => spell.prepared).length;
	const spellSaveDC = character.combat.proficiency[0].saveDC;

	const slotToArray = (slot: FifthEditionCharacter['combat']['spellSlots'][0]) => {
		const arr = [];
		const max = slot.maxSpellSlots || 0;
		for (let i = 0; i < max; i++) {
			arr.push(i);
		}
		return arr;
	};
</script>

<!-- TODO: Add slot for actions in NSD and pass it a "Cast" button here -->
<Card title={`Spells - ${preparedSpellsCount} Prepared`} {delay}>
	{#each spellSlots as slot, i}
		<div class="mb-8">
			<div class="font-raleway flex flex-row mb-1 justify-between items-end text-c-caption-gray">
				<h3>
					{slot.spellSlotLevel === 'cantrip' ? 'Cantrips' : `${slot.spellSlotLevel} Level`}
				</h3>
				<span class="inline-flex gap-2">
					{#if slot.spellSlotLevel === 'cantrip'}
						<div class="mt-8">
							<span
								class="border-2 rounded-full border-c-gold hover:animate-pulse select-none px-2 text-c-caption-gray"
							>
								<span class="text-c-gold">
									{spellSaveDC}&nbsp;
								</span>
								Spell Save DC
							</span>
						</div>
					{/if}
					{#each slotToArray(slot) as _, i}
						<MultiCheckbox skill={{ proficient: i <= (slot.currentSpellSlots || 0) }} />
					{/each}
				</span>
			</div>
			<div class="flex flex-col w-full p-5 rounded-standard bg-c-card-light dark:bg-c-dark-gray">
				{#each spells as spell}
					{#if spell.level === i}
						<Nsd NSD={spell} fade={!spell.prepared} />
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</Card>
