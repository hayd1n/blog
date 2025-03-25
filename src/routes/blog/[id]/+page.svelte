<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { APP_NAME } from '$lib/app';
	import CodeBlock from '$lib/components/CodeBlock.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import type { PageData } from './$types';
	import Comments from './Comments.svelte';
	import Header from './Header.svelte';
	import Tags from './Tags.svelte';

	export let data: PageData;
	$: frontMatter = data.frontMatter;
	$: content = data.content;
</script>

<svelte:head>
	<title>{frontMatter.title} - {APP_NAME}</title>
</svelte:head>

<section class="w-full">
	<Header title={frontMatter.title} />

	<article class="prose dark:prose-invert">
		<SvelteMarkdown source={content} renderers={{ code: CodeBlock }} />
	</article>

	<Separator class="my-12" />

	<Tags tags={frontMatter.tags} />

	<Separator class="my-12" />

	<Comments lang={data.giscusLocale} />
</section>
