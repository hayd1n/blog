<script lang="ts">
	import { APP_NAME } from '$lib/app';
	import * as Navbar from '$lib/components/navbar';
	import ThemeToggler from '$lib/components/ThemeToggler.svelte';
	import { t } from '$lib/translations';

	const menu = [
		{ name: 'home', href: '/' },
		{ name: 'posts', href: '/posts' },
		{ name: 'categories', href: '/categories' },
		{ name: 'tags', href: '/tags' }
	];

	let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<Navbar.Root border={scrollY > 0}>
	<Navbar.Brand href="/">{APP_NAME}</Navbar.Brand>
	<Navbar.Space />
	<Navbar.Items>
		{#each menu as { name, href }}
			<Navbar.Item {href}>{$t(`page.${name}`)}</Navbar.Item>
		{/each}
	</Navbar.Items>
	<ThemeToggler />
</Navbar.Root>
