<script lang="ts">
	import { createPopover } from 'svelte-headlessui';
	import Transition from 'svelte-transition';

	const popover = createPopover({});
</script>

<div use:popover.button>
	<slot name="trigger" class={$popover.expanded ? '' : 'opacity-30'} />
</div>

<Transition
	show={$popover.expanded}
	enter="transition ease-out duration-200"
	enterFrom="opacity-0 translate-y-1"
	enterTo="opacity-100 translate-y-0"
	leave="transition ease-in duration-150"
	leaveFrom="opacity-100 translate-y-0"
	leaveTo="opacity-0 translate-y-1"
>
	<div
		use:popover.panel
		class="relative drop-shadow-lg left-auto right-auto z-50 w-screen max-w-sm transform lg:max-w-3xl"
		on:click={popover.close}
		on:keydown={popover.close}
	>
		<div>
			<div class="rounded-standard bg-c-near-white p-5 dark:bg-c-dark-gray">
				<slot name="content" />
			</div>
		</div>
	</div>
</Transition>
