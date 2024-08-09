<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import Header from './Header.svelte';
	import { APP_NAME } from '$lib/app';

	export let data: PageData;

	$: frontMatter = data.frontMatter;
	$: content = data.content;
	$: posts = data.posts;
</script>

<svelte:head>
	<title>{frontMatter.title} - {APP_NAME}</title>
</svelte:head>

<section>
	<Header title={frontMatter.title} />

	<article class="prose">
		<SvelteMarkdown source={content} />
	</article>
</section>
