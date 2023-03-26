<script lang="ts">
	import ModifierView from '$lib/components/Shared/ModifierView.svelte';
	import MultiCheckbox from '$lib/components/Shared/MultiCheckbox/MultiCheckbox.svelte';
	import type { FifthEditionCharacter } from '../../../../../../../packages/types/payload-types';

	export let skill: FifthEditionCharacter['AbilityScoresAndSkills']['skills']['acrobatics'];
	export let name: string;
</script>

<div>
	<div class="font-raleway text-xs md:text-sm font-semibold">{name}</div>
	<div class="inline-flex items-center space-x-3">
		<ModifierView modifier={skill.bonus || 0} />
		<MultiCheckbox {skill} />
	</div>
</div>
