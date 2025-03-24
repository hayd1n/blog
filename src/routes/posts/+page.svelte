<script lang="ts">
	import { APP_NAME } from '$lib/app';
	import PostTitle from '$lib/components/PostTitle.svelte';
	import { t } from '$lib/translations';
	import type { PageData } from './$types';

	export let data: PageData;

	$: posts = data.posts;
</script>

<svelte:head>
	<title>{$t('page.posts') + ' - ' + APP_NAME}</title>
</svelte:head>

<div class="flex w-full flex-col items-start gap-2">
	{#each posts as p (p)}
		<a href="/blog/{p}" class="w-fit">
			<PostTitle size="sm">{p}</PostTitle>
		</a>
	{/each}
</div>
