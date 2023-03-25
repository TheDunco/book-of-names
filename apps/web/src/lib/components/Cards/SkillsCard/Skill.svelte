<script lang="ts">
	import ModifierView from '$lib/components/Shared/ModifierView.svelte';
	import MultiCheckbox from '$lib/components/Shared/MultiCheckbox/MultiCheckbox.svelte';
	import type { FifthEditionCharacter } from '../../../../../../../packages/types/payload-types';

	export let skill: FifthEditionCharacter['AbilityScoresAndSkills']['skills']['acrobatics'];
	export let name: string;
	console.log(`%c[Skill.svelte] skill :>> ${skill}`, 'color:red', skill);
</script>

<div>
	<div class="font-raleway text-xs text-c-caption-gray">{name}</div>
	<div class="inline-flex items-center space-x-2">
		<MultiCheckbox {skill} />
		<ModifierView modifier={skill.bonus || 0} />
	</div>
</div>
