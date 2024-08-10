<script lang="ts">
	export let href: string | undefined = undefined;
</script>

<div class="flex font-bold" {...$$restProps}>
	<a {href}>
		<slot />
	</a>
</div>
