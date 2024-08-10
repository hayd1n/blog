<script lang="ts">
	import { Menu, X } from 'lucide-svelte';
	import { Button } from '../ui/button';

	export let open = false;

	function handleButtonClick() {
		open = !open;
	}
</script>

<Button variant="link" size="icon" on:click={handleButtonClick} {...$$restProps}>
	{#if open}
		<X class="h-4 w-4" />
	{:else}
		<Menu class="h-4 w-4" />
	{/if}
	<span class="sr-only">Toggle Menu</span>
</Button>
