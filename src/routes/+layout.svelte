<script lang="ts">
	import '../app.pcss';
	import { ModeWatcher } from 'mode-watcher';
	import { fly } from 'svelte/transition';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';

	const animationDuration = 400;

	export let data;
</script>

<Navbar />

{#key data.url}
	<div
		class="flex min-h-screen w-full flex-col flex-nowrap items-center gap-2 p-4 pt-14"
		in:fly={{ y: 10, duration: animationDuration, delay: animationDuration }}
		out:fly={{ y: -5, duration: animationDuration }}
	>
		<main class="flex w-full flex-col md:w-10/12 lg:w-fit lg:min-w-[600px]">
			<slot />
		</main>

		<!-- Space -->
		<div class="flex grow" />

		<Footer />
	</div>
{/key}

<ModeWatcher />
