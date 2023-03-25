<script lang="ts">
	export let label: string;
</script>

<div class="">
	<div class="font-raleway text-xs text-c-caption-gray">
		{label}
	</div>
	<div class="text-xl">
		<slot />
	</div>
</div>
