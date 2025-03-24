<script lang="ts">
	import { Button } from '../ui/button';

	export let href: string | undefined = undefined;
	export let current: boolean = false;
</script>

<Button
	variant="link"
	{href}
	class={current ? 'text-link underline' : ''}
	aria-current={current}
	on:click
	on:keydown
	{...$$restProps}
>
	<slot />
</Button>
