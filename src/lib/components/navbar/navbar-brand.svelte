<script lang="ts">
	export let href: string | undefined = undefined;
</script>

<div class="flex">
	<a {href}>
		<slot />
	</a>
</div>
