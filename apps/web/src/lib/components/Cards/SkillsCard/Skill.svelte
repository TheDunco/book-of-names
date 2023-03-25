<script lang="ts">
	import ModifierView from '$lib/components/Shared/ModifierView.svelte';

	export let mod = 0;
	export let name = '';
</script>

<div>
	<div class="font-raleway text-xs text-c-caption-gray">{name}</div>
	<div class="inline-flex items-center space-x-2">
		<div class="rounded-md bg-c-light-gray h-5 w-5" />
		<ModifierView modifier={mod} />
	</div>
</div>
