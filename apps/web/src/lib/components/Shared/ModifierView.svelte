<script lang="ts">
	export let modifier: number;
</script>

<div class="text-xl">
	{#if modifier > 0}
		<span class="text-c-green">+{modifier}</span>
	{:else if modifier < 0}
		<span class="text-c-red">-{modifier}</span>
	{:else}
		<span class="dark:text-c-caption-gray">+{modifier}</span>
	{/if}
</div>
