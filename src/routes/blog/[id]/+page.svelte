<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import Header from './Header.svelte';
	import { APP_NAME } from '$lib/app';
	import Comments from './Comments.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import Tags from './Tags.svelte';

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

	<Separator class="my-12" />

	<Tags tags={frontMatter.tags} />

	<Separator class="my-12" />

	<Comments lang={data.giscusLocale} />
</section>
