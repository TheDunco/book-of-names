<script lang="ts">
	import Card from '../Shared/Card.svelte';
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
	import Nsd from '../Shared/NSD.svelte';

	export let character: FifthEditionCharacter;
	export let delay = 0;

	const abilities = character.combat.abilities;
</script>

<Card title="Abilities" {delay}>
	{#each abilities as ability}
		<Nsd NSD={ability} />
	{/each}
</Card>
