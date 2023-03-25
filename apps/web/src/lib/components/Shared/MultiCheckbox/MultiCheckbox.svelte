<script lang="ts">
	import type { FifthEditionCharacter } from '../../../../../../../packages/types/payload-types';

	export let skill: FifthEditionCharacter['AbilityScoresAndSkills']['skills']['acrobatics'];
</script>

<div
	class="rounded-md flex items-center justify-center bg-c-light-gray dark:bg-c-dark-gray h-5 w-5"
>
	<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
		{#if skill.proficient}
			<circle cx="6" cy="6" r="6" fill="#CAA247" />
		{:else if skill.expertise}
			<circle cx="6" cy="6" r="5" stroke="#CAA247" stroke-width="2" />
			<circle cx="6" cy="6" r="2" fill="#CAA247" />
		{:else if skill.halfProficient}
			<circle cx="6" cy="6" r="5" stroke="#CAA247" stroke-width="2" />
		{/if}
	</svg>
</div>
