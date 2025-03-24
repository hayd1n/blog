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

	let navbarOpen = false;

	function handleItemClick() {
		navbarOpen = false;
	}
</script>

<svelte:window bind:scrollY />

<Navbar.Root border={scrollY > 0}>
	<Navbar.Brand href="/">{APP_NAME}</Navbar.Brand>
	<Navbar.Space />
	<Navbar.Items bind:open={navbarOpen}>
		{#each menu as { name, href } (name)}
			<Navbar.Item {href} on:click={handleItemClick}>{$t(`page.${name}`)}</Navbar.Item>
		{/each}
	</Navbar.Items>
	<ThemeToggler />
	<div class="block sm:hidden">
		<Navbar.MenuToggle bind:open={navbarOpen} />
	</div>
</Navbar.Root>
