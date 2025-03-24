<script lang="ts">
	import portrait from '$lib/assets/portrait.webp?enhanced';

	const bornYear = 2003;
	const currentYear = new Date().getFullYear();
	const age = currentYear - bornYear;

	const infos = {
		Name: 'Hayden Chang 張皓鈞',
		Gender: 'Male',
		Age: age,
		OS: 'macOS, Arch Linux',
		Shell: 'fish, zsh, bash',
		Editor: 'VSCode, Zed, Helix',
		'Programming Languages': 'TypeScript, Rust, Go, C++',
		Frameworks: 'SvelteKit, Express, Rocket',
		Tools: 'GitHub Actions, Docker, Bun, Cargo',
		Languages: 'Chinese (Traditional), English',
		Timezone: 'UTC+8 (Taipei)',
		Education: 'National Taiwan University of Science and Technology',
		Interests: 'Web Development, Cybersecurity, AI, Embedded Systems',
		Moto: 'KTM 390 Duke 🏍️'
	};

	const ansiColors = [
		{ name: 'Ansi 0', r: 0, g: 0, b: 0 },
		{ name: 'Ansi 1', r: 0.6, g: 0, b: 0 },
		{ name: 'Ansi 2', r: 0, g: 0.65, b: 0 },
		{ name: 'Ansi 3', r: 0.6, g: 0.6, b: 0 },
		{ name: 'Ansi 4', r: 0, g: 0, b: 0.698 },
		{ name: 'Ansi 5', r: 0.698, g: 0, b: 0.698 },
		{ name: 'Ansi 6', r: 0, g: 0.65, b: 0.698 },
		{ name: 'Ansi 7', r: 0.749, g: 0.749, b: 0.749 },
		{ name: 'Ansi 8', r: 0.4, g: 0.4, b: 0.4 },
		{ name: 'Ansi 9', r: 0.898, g: 0, b: 0 },
		{ name: 'Ansi 10', r: 0, g: 0.851, b: 0 },
		{ name: 'Ansi 11', r: 0.898, g: 0.898, b: 0 },
		{ name: 'Ansi 12', r: 0, g: 0, b: 1 },
		{ name: 'Ansi 13', r: 0.898, g: 0, b: 0.898 },
		{ name: 'Ansi 14', r: 0, g: 0.898, b: 0.898 },
		{ name: 'Ansi 15', r: 0.898, g: 0.898, b: 0.898 }
	];

	const accentColor = ansiColors[2];

	function toRGB(color: { r: number; g: number; b: number }) {
		return `rgb(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`;
	}
</script>

<div class="flex w-full flex-col gap-10 sm:flex-row sm:gap-20 sm:p-6">
	<div class="shrink-0">
		<enhanced:img src={portrait} alt="Portrait of Hayden" width="180" />
	</div>
	<div class="font-mono">
		<h1 class="font-bold">
			<span style="color: {toRGB(accentColor)}">Hayden</span>@<span
				style="color: {toRGB(accentColor)}">Taiwan</span
			>
		</h1>
		<span>-----------------------</span>
		{#each Object.keys(infos) as key (key)}
			<p>
				<span class="font-semibold" style="color: {toRGB(accentColor)}">{key}:</span>
				{infos[key as keyof typeof infos]}
			</p>
		{/each}

		<br />

		<div class="grid w-fit grid-cols-8">
			{#each ansiColors as color (color)}
				<div class="color-box" style="background-color: {toRGB(color)};"></div>
			{/each}
		</div>
	</div>
</div>

<style>
	.color-box {
		width: 2.5em;
		height: 1.4em;
		text-align: center;
		display: flex;
		color: rgba(0, 0, 0, 0);
	}
</style>
