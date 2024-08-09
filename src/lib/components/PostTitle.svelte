<script lang="ts">
	export let handle: HTMLHeadElement | undefined = undefined;
	export let size: 'default' | 'sm' = 'default';

	const sizes = {
		default: 'text-4xl',
		sm: 'text-2xl'
	};
</script>

<h1 class="{sizes[size]} font-bold leading-snug" bind:this={handle}>
	<slot />
</h1>
