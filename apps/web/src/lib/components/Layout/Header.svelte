<script lang="ts">
	import { locale } from '$i18n/i18n-svelte';
	// import LocaleSwitcher from '$lib/components/LocaleSwitcher.svelte';
	import ThemeSwitcher from '$lib/components/Layout/ThemeSwitcher.svelte';
	import Logo from '$lib/components/Shared/Logo.svelte';
</script>

<header class="fixed top-0 z-20 h-24 w-full bg-c-gold drop-shadow-md">
	<div class="flex h-full w-full flex-row items-center justify-between p-4 align-middle">
		<a href="/{$locale}">
			<Logo />
		</a>

		<ThemeSwitcher />
	</div>
</header>
