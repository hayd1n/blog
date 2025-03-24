<script lang="ts">
	export let href: string | undefined = undefined;

	let className: string | undefined = undefined;
	export { className as class };
</script>

<div class="flex font-bold {className}" {...$$restProps}>
	<a {href}>
		<slot />
	</a>
</div>
