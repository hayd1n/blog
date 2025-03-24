<script lang="ts">
	import { fade } from 'svelte/transition';

	export let open = false;

	function handleOverlayClick() {
		open = false;
	}
</script>

<nav
	class="fixed left-0 top-0 z-40 mt-11 flex w-full flex-col flex-nowrap items-start gap-1 bg-background sm:bg-transparent {open
		? 'h-fit border-y py-4'
		: 'h-0 py-0'} overflow-hidden transition-all sm:static sm:mt-0 sm:h-fit sm:w-fit sm:flex-row sm:overflow-auto sm:border-none sm:bg-none sm:py-0 sm:pt-0 sm:transition-none"
	{...$$restProps}
>
	<slot />
</nav>

{#if open}
	<!-- Overlay -->
	<div
		aria-hidden={true}
		class="block-overflow fixed left-0 top-11 z-20 h-screen w-screen bg-background bg-opacity-80"
		on:click={handleOverlayClick}
		transition:fade={{ duration: 150 }}
	></div>
{/if}

<style lang="postcss">
	:global(body:has(*.block-overflow)) {
		@apply !overflow-hidden;
	}
</style>
