<script lang="ts">
	export let modifier: number;
</script>

<div class="text-xl">
	{#if modifier > 0}
		<span class="text-c-green">+{modifier}</span>
	{:else if modifier < 0}
		<span class="text-c-red">-{modifier}</span>
	{:else}
		<span>{modifier}</span>
	{/if}
</div>
