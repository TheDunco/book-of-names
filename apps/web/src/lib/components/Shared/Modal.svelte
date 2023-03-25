<script lang="ts">
	import { createDialog } from 'svelte-headlessui';
	import Transition from 'svelte-transition';

	const dialog = createDialog({});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={dialog.open}>
	<slot name="trigger" class={$dialog.expanded ? '' : 'opacity-30'} />
</div>

<div class="relative z-10">
	<Transition show={$dialog.expanded}>
		<Transition
			enter="ease-out duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="fixed inset-0 items-center justify-center backdrop-blur-sm bg-c-near-black bg-opacity-25"
				on:click={dialog.close}
			/>
		</Transition>

		<div class="fixed inset-0 overflow-y-auto">
			<div class="flex min-h-full items-center justify-center p-4 text-center">
				<Transition
					enter="ease-out duration-300"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<div
						class="w-full z-50 max-w-3xl transform overflow-hidden rounded-2xl dark:bg-c-dark-gray bg-c-near-white p-8 text-left align-middle shadow-xl transition-all"
						use:dialog.modal
					>
						<slot name="content" />
					</div>
				</Transition>
			</div>
		</div>
	</Transition>
</div>
