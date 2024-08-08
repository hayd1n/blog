<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';

	export let data: PageData;

	$: post = data.post;
	$: posts = data.posts;
</script>

<div>
	<SvelteMarkdown source={post} />
</div>

<hr class="my-4" />

<h2>Previous Posts</h2>
<ul>
	{#each posts as p}
		<li><a href="/blog/{p}">{p}</a></li>
	{/each}
</ul>
