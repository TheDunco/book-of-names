<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
	import { setLocale } from '$i18n/i18n-svelte';
	import Header from '$lib/components/Layout/Header.svelte';
	import HeadHrefLangs from '$lib/components/Layout/HeadHrefLangs.svelte';
	import type { LayoutData } from './$types';
	import SvelteTheme from '$lib/components/SvelteThemes/SvelteTheme.svelte';
	export let data: LayoutData;
	// at the very top, set the locale before you access the store and before the actual rendering takes place
	setLocale(data.locale);
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	<HeadHrefLangs />
</svelte:head>

<Header />
<div class="mt-24 py-8 transition-gpu">
	<slot />
</div>

<SvelteTheme attribute="data-theme" />
