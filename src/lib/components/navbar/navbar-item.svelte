<script lang="ts">
	import { Button } from '../ui/button';

	export let href: string | undefined = undefined;
</script>

<Button variant="link" {href} on:click on:keydown {...$$restProps}>
	<slot />
</Button>
