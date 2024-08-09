<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { APP_NAME } from '$lib/app';
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
