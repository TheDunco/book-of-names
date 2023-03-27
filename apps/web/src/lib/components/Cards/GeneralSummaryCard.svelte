<script lang="ts">
	import type { FifthEditionCharacter } from '../../../../../../packages/types/payload-types';
	import { guardValue } from '$lib/utils';
	import Card from '../Shared/Card.svelte';
	import LabelValue from '../Shared/LabelValue.svelte';
	import Modal from '../Shared/Modal.svelte';

	export let character: FifthEditionCharacter;
	export let delay: number;
	export let removeMargin = false;
	export let detail = true;

	const char = character.character;
	const halfSpeed = (char.speed || 30) / 2;
	const strength = character?.AbilityScoresAndSkills?.abilityScores?.strength;
	const carryCapacity = (strength?.strengthScore || 10) * 15;
</script>

<Card title={undefined} {removeMargin} {delay}>
	<div class="flex flex-col mt-4 gap-2">
		<span class="text-4xl">
			{character.name}
			<span class="font-raleway text-base text-c-caption-gray">
				({guardValue(char.pronouns || 'Pronouns')})
			</span>
		</span>
		<span>
			<span class="font-bold text-c-gold">Level {char.overallLevel}</span>
			<span class="text-c-caption-gray">{guardValue(char.race || 'Race')}</span>
			{#each char?.classes ?? [] as indivClass, i}
				<span class="text-c-caption-gray">
					{guardValue(indivClass.class)}
					{#if char?.classes && char.classes?.length > 1 && i < char?.classes.length - 1}
						/
					{/if}
				</span>
			{/each}
		</span>
		{#if detail}
			<Modal>
				<div class="cursor-pointer hover:animate-pulse" slot="trigger">
					<span
						class="grid w-full mt-5 grid-cols-2 justify-between gap-2 xs:flex xs:flex-row md:gap-6"
					>
						<LabelValue label="Health">
							<div class="inline-flex flex-wrap">
								<span class="text-c-gold">
									{guardValue(character?.combat?.health?.currentHitPoints)}
								</span>
								{#if character?.combat?.health?.temporaryHitPoints}
									<span class="text-c-gold">
										&nbsp;({guardValue(character.combat.health.temporaryHitPoints)})
									</span>
								{/if}
								<span class="text-c-caption-gray"> / </span>
								{guardValue(character?.combat?.health?.maxHitPoints)}
							</div>
						</LabelValue>
						<LabelValue label="Proficiency Bonus">
							+{guardValue(char.proficiencyBonus)}
						</LabelValue>
						<LabelValue label="XP">
							{guardValue(char.xp)}
						</LabelValue>
						<LabelValue label="AC">
							{guardValue(char.armorClass || 10)}
						</LabelValue>
						<LabelValue label="Speed">
							{guardValue(char.speed || 30)}
						</LabelValue>
					</span>
				</div>
				<div slot="content">
					<span class="grid w-full grid-cols-2 justify-between gap-4 xs:flex xs:flex-row md:gap-6">
						<LabelValue label="Health">
							<div class="inline-flex flex-wrap">
								<span class="text-c-gold">
									{guardValue(character?.combat?.health?.currentHitPoints)}
								</span>
								{#if character?.combat?.health?.temporaryHitPoints}
									<span class="text-c-gold">
										&nbsp;({guardValue(character.combat.health.temporaryHitPoints)})
									</span>
								{/if}
								<span class="text-c-caption-gray"> / </span>
								{guardValue(character?.combat?.health?.maxHitPoints)}
							</div>
						</LabelValue>
						{#if char.darkvision}
							<LabelValue label="Darkvision">
								{char.darkvision}
							</LabelValue>
						{/if}
						<LabelValue label="XP">
							{guardValue(char.xp)}
						</LabelValue>
						<LabelValue label="Inspiration">
							{#if char.inspiration}
								Yes
							{:else}
								No
							{/if}
						</LabelValue>
						<LabelValue label="Proficiency Bonus">
							+{guardValue(char.proficiencyBonus)}
						</LabelValue>
						<LabelValue label="AC">
							{guardValue(char.armorClass || 10)}
						</LabelValue>
						<LabelValue label="Speed">
							{guardValue(char.speed || 30)}
						</LabelValue>
					</span>
					<span
						class="mt-8 grid w-full grid-cols-2 justify-between gap-4 xs:flex xs:flex-row md:gap-6"
					>
						<LabelValue label="Fly Speed">
							{char.flySpeed || halfSpeed}<span class="text-sm">ft</span>
						</LabelValue>
						<LabelValue label="Swim Speed">
							{char.swimSpeed || halfSpeed}<span class="text-sm">ft</span>
						</LabelValue>
						<LabelValue label="Carry Capacity">
							{carryCapacity}<span class="text-sm">lbs</span>
						</LabelValue>
						<LabelValue label="Push/Lift/Drag Weight">
							<div>
								{carryCapacity * 2}<span class="text-sm">lbs</span>
							</div>
						</LabelValue>
						<LabelValue label="Long Jump">
							{strength?.strengthScore || 10}<span class="text-sm">ft</span>
						</LabelValue>
						<LabelValue label="High Jump">
							{`${3 + (strength?.strengthModifier || 10)} + ${character.character.height}`}<span
								class="text-sm">ft</span
							>
						</LabelValue>
					</span>
				</div>
			</Modal>
		{/if}
	</div>
</Card>
