<script lang="ts">
	import PostTitle from '$lib/components/PostTitle.svelte';

	export let title = '';
</script>

<header class="flex flex-col flex-nowrap pb-12 pt-6 md:pt-12">
	<PostTitle>{title}</PostTitle>
</header>
