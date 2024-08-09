<script lang="ts">
	import { Button } from '../ui/button';

	export let href: string | undefined = undefined;
</script>

<Button variant="link" {href}>
	<slot />
</Button>
