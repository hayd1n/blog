<script lang="ts">
	import Giscus, { type AvailableLanguage } from '@giscus/svelte';
	import { mode } from 'mode-watcher';
	import { GISCUS_CONFIG } from '$lib/app';

	export let lang: AvailableLanguage | undefined = undefined;
</script>

<Giscus
	id="comments"
	repo={GISCUS_CONFIG.repo}
	repoId={GISCUS_CONFIG.repoId}
	category={GISCUS_CONFIG.category}
	categoryId={GISCUS_CONFIG.categoryId}
	mapping={GISCUS_CONFIG.mapping}
	term={GISCUS_CONFIG.term}
	reactionsEnabled={GISCUS_CONFIG.reactionsEnabled}
	emitMetadata={GISCUS_CONFIG.emitMetadata}
	inputPosition={GISCUS_CONFIG.inputPosition}
	loading={GISCUS_CONFIG.loading}
	theme={$mode === 'dark' ? 'dark' : 'light'}
	{lang}
/>
