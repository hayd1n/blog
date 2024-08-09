<script lang="ts">
	import { fly } from 'svelte/transition';

	export let pathname: string = '';
	export let duration: number = 400;
</script>

{#key pathname}
	<div in:fly={{ y: 10, duration, delay: duration }} out:fly={{ y: -5, duration }}>
		<slot />
	</div>
{/key}
