<script lang="ts">
	import PostTitle from '$lib/components/PostTitle.svelte';

	export let title = '';
</script>

<header class="flex flex-col flex-nowrap py-6 md:py-12">
	<PostTitle>{title}</PostTitle>
</header>
