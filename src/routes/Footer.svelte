<script lang="ts">
	import { Github } from 'lucide-svelte';
	import { AUTHOR_GITHUB, AUTHOR_NAME, LICENSE, LICENSE_URL } from '$lib/app';

	const date = new Date();
	const year = date.getFullYear();
</script>

<footer class="flex flex-col flex-nowrap gap-1 py-6 text-sm text-muted-foreground">
	<p class="footer-section">
		<a href="https://github.com/hayd1n/blog" target="_blank"
			><Github class="h-4 w-4" /> hayd1n/blog</a
		>
	</p>
	<p class="footer-section">
		<a href={LICENSE_URL} target="_blank">{LICENSE}</a>
		© {year}

		<a href={AUTHOR_GITHUB} target="_blank">{AUTHOR_NAME}</a>
	</p>
</footer>

<style lang="postcss">
	.footer-section {
		@apply flex flex-row items-center justify-center gap-1;
	}

	.footer-section a {
		@apply inline-flex flex-row items-center gap-1;
	}
</style>
