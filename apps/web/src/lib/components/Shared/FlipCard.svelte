<script lang="ts">
	import { Transition } from 'svelte-transition';

	let flip = false;
	let flipCard = () => {
		flip = !flip;
	};
</script>

<Transition
	show={flip}
	enter="ease-out duration-300"
	enterFrom="rotate-y-180"
	enterTo="rotate-y-0"
	leave="ease-in duration-200"
	leaveFrom="rotate-y-0"
	leaveTo="rotate-y-180 hidden"
>
	<!-- TODO: Fix this so it's not needed -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="cursor-pointer" on:click={flipCard}>
		<slot name="front" />
	</div>
</Transition>

<Transition
	show={!flip}
	enter="ease-out duration-300"
	enterFrom="rotate-y-180"
	enterTo="rotate-y-0"
	leave="ease-in duration-200"
	leaveFrom="rotate-y-0"
	leaveTo="rotate-y-180 hidden"
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="cursor-pointer" on:click={flipCard}>
		<slot name="back" />
	</div>
</Transition>
