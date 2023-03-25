<script lang="ts">
	import Modal from '../Modal.svelte';
	import CardContents from './CardContents.svelte';

	export let title: string | undefined;
	export let removeMargin: boolean = false;
	export let delay = 0;
</script>

<!-- TODO: Convert this to use the Modal component instead of the custom zoom. -->

<div class="h-full">
	<Modal>
		<CardContents slot="trigger" {title} {removeMargin} {delay}>
			<slot />
		</CardContents>
		<CardContents slot="content" {title} {removeMargin} {delay}>
			<slot />
		</CardContents>
	</Modal>
</div>
