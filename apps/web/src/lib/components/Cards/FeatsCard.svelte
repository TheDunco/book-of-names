<script lang="ts">
	import Card from '../Shared/Card.svelte';
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
	import Nsd from '../Shared/NSD.svelte';

	export let character: FifthEditionCharacter;
	export let delay = 0;

	const feats = character.combat.feats;
</script>

<Card title="Feats" {delay}>
	{#each feats ?? [] as feat}
		<Nsd NSD={feat} />
	{/each}
</Card>
