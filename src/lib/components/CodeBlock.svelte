<script lang="ts">
	import { Check, Copy } from 'lucide-svelte';
	import { mode } from 'mode-watcher';
	import Highlight from 'svelte-highlight';
	import bash from 'svelte-highlight/languages/bash';
	import css from 'svelte-highlight/languages/css';
	import go from 'svelte-highlight/languages/go';
	import ini from 'svelte-highlight/languages/ini';
	import java from 'svelte-highlight/languages/java';
	import javascript from 'svelte-highlight/languages/javascript';
	import json from 'svelte-highlight/languages/json';
	import markdown from 'svelte-highlight/languages/markdown';
	import plaintext from 'svelte-highlight/languages/plaintext';
	import powershell from 'svelte-highlight/languages/powershell';
	import rust from 'svelte-highlight/languages/rust';
	import scss from 'svelte-highlight/languages/scss';
	import typescript from 'svelte-highlight/languages/typescript';
	import xml from 'svelte-highlight/languages/xml';
	import yaml from 'svelte-highlight/languages/yaml';
	import lightTheme from 'svelte-highlight/styles/github';
	import darkTheme from 'svelte-highlight/styles/github-dark';
	import { sleep } from '$lib/common';
	import { Button } from './ui/button';

	export let lang: string;
	export let text: string;

	let copied = false;

	const languages = [
		{ aliases: ['bash', 'sh'], language: bash },
		{ aliases: ['css'], language: css },
		{ aliases: ['go'], language: go },
		{ aliases: ['ini', 'toml'], language: ini },
		{ aliases: ['javascript', 'js'], language: javascript },
		{ aliases: ['json'], language: json },
		{ aliases: ['markdown', 'md'], language: markdown },
		{ aliases: ['plaintext'], language: plaintext },
		{ aliases: ['powershell', 'ps'], language: powershell },
		{ aliases: ['rust'], language: rust },
		{ aliases: ['java'], language: java },
		{ aliases: ['scss'], language: scss },
		{ aliases: ['typescript', 'ts'], language: typescript },
		{ aliases: ['xml', 'html', 'xhtml'], language: xml },
		{ aliases: ['yaml', 'yml'], language: yaml }
	];

	const language = languages.find(({ aliases }) => aliases.includes(lang))?.language;

	async function handleCopy() {
		navigator.clipboard.writeText(text);
		copied = true;
		await sleep(2000);
		copied = false;
	}
</script>

<svelte:head>
	<!-- 
    We're blocking the eslint check here because we need to insert 
    the source code highlighting style here, and that source code is trusted. 
    -->
	{#if $mode === 'dark'}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html darkTheme}
	{:else}
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html lightTheme}
		<style>
			.hljs {
				background-color: rgb(246, 248, 250);
			}
		</style>
	{/if}
</svelte:head>

<div class="relative">
	{#if language}
		<Highlight {language} code={text} class="hljs" />
	{:else}
		<Highlight language={plaintext} code={text} class="hljs" />
	{/if}
	<Button variant="ghost" size="icon" class="absolute right-2 top-2" on:click={handleCopy}>
		{#if copied}
			<Check class="h-4 w-4" />
		{:else}
			<Copy class="h-4 w-4" />
		{/if}
	</Button>
</div>
