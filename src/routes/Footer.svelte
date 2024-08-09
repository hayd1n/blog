<script lang="ts">
	import { AUTHOR_GITHUB, AUTHOR_NAME } from '$lib/app';
	import { Github } from 'lucide-svelte';

	const date = new Date();
	const year = date.getFullYear();
</script>

<footer class="flex flex-col flex-nowrap gap-1 text-sm text-muted-foreground">
	<p class="footer-section">
		<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>
		© {year}

		<a href={AUTHOR_GITHUB} target="_blank">{AUTHOR_NAME}</a>
	</p>
	<p class="footer-section">
		Powered by
		<a href="https://github.com/CRT-HAO/blog" target="_blank"><Github class="h-4 w-4" /> blog</a>
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
