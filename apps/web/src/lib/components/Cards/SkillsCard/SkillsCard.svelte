<script lang="ts">
	import type { FifthEditionCharacter } from '../../../../../../../packages/types/payload-types';
	import Card from '../../Shared/Card.svelte';
	import Skill from './Skill.svelte';

	export let character: FifthEditionCharacter;
	export let delay: number;

	const skills = character.AbilityScoresAndSkills.skills ?? {};
</script>

<Card title="Skills" {delay}>
	<div class="grid h-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
		<div class="grid gap-3 grid-rows-[1fr_repeat(5,_2fr)]">
			<h2 class="font-raleway mb-1 align-text-bottom text-c-caption-gray">Intelligence</h2>
			<Skill name="Arcana" skill={skills.arcana} />
			<Skill name="History" skill={skills.history} />
			<Skill name="Investigation" skill={skills.investigation} />
			<Skill name="Nature" skill={skills.nature} />
			<Skill name="Religion" skill={skills.religion} />
		</div>
		<div class="grid gap-3 grid-rows-[1fr_repeat(5,_2fr)]">
			<h2 class="font-raleway mb-1 text-c-caption-gray">Wisdom</h2>
			<Skill name="Animal Handling" skill={skills.animalHandling} />
			<Skill name="Insight" skill={skills.insight} />
			<Skill name="Medicine" skill={skills.medicine} />
			<Skill name="Perception" skill={skills.perception} />
			<Skill name="Survival" skill={skills.survival} />
		</div>
		<div class="grid gap-3 grid-rows-[1fr_repeat(5,_2fr)] mt-5 sm:mt-0 lg:mt-5 xl:mt-0">
			<h2 class="font-raleway mb-1 text-c-caption-gray">Charisma</h2>
			<Skill name="Deception" skill={skills.deception} />
			<Skill name="Intimidation" skill={skills.intimidation} />
			<Skill name="Performance" skill={skills.performance} />
			<Skill name="Persuasion" skill={skills.persuasion} />
		</div>
		<div class="grid gap-3 grid-rows-[1fr_repeat(5,_2fr)] mt-5 sm:mt-0 lg:mt-5 xl:mt-0">
			<h2 class="font-raleway mb-1 text-c-caption-gray">Dexterity</h2>
			<Skill name="Acrobatics" skill={skills.acrobatics} />
			<Skill name="Sleight of Hand" skill={skills.sleightOfHand} />
			<Skill name="Stealth" skill={skills.stealth} />
			<div class="row-span-2">
				<h2
					class="font-raleway mb-3 border-t border-c-light-gray text-c-caption-gray max-w-min pt-5"
				>
					Strength
				</h2>
				<Skill name="Athletics" skill={skills.athletics} />
			</div>
		</div>
	</div>
</Card>
