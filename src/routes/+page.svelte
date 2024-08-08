<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: posts = data.posts;
</script>

<ul>
	{#each posts as p}
		<li><a href="/blog/{p}">{p}</a></li>
	{/each}
</ul>
