<script lang="ts">
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
	import Card from '../Shared/Card.svelte';
	import Nsd from '../Shared/NSD.svelte';

	export let delay = 0;
	export let character: FifthEditionCharacter;
	const chapters = character.journalChapters;
</script>

<Card title="Journal" {delay}>
	<div class="overflow-auto">
		{#if chapters?.length}
			{#each chapters as chapter (chapter.id)}
				<div class="mb-8">
					{#if chapter.name}
						<h3 class="font-raleway text-c-caption-gray">{chapter.name}</h3>
					{/if}
					<div
						class="flex flex-col w-full p-5 rounded-standard bg-c-card-light dark:bg-c-dark-gray"
					>
						{#if chapter?.journalEntries?.length}
							{#each chapter.journalEntries as entry (entry.id)}
								<Nsd NSD={entry} />
							{/each}
						{/if}
					</div>
				</div>
			{/each}
			<!-- TODO: Add journal entry button -->
		{:else}
			<i class="text-c-caption-gray"> No journal entries </i>
		{/if}
	</div>
</Card>
