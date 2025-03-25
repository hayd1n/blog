<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { APP_NAME } from '$lib/app';
	import Neofetch from './Neofetch.svelte';

	const _introductionZh = `
來自台灣的學生開發者，熱衷於技術與創新。從小對電腦科學充滿興趣，並在早期便開始學習程式設計，探索從 **網頁應用**、**桌面軟體** 到 **嵌入式系統與工業網路安全** 等不同領域。

曾代表台灣參加 **第 46 屆世界技能競賽 (WorldSkills 2022) 移動機器人職類**，在競賽與實作中培養了嚴謹的工程思維與解決問題的能力。目前就讀於 **國立台灣科技大學**，持續鑽研新技術，並在開發過程中追求優雅、高效的解決方案。

我熱衷於參與**開源社群**，樂於貢獻程式碼、交流技術，並透過開源專案學習與成長。我相信開源不僅是一種開發模式，更是一種讓技術共享、促進創新的精神。

我習慣用圖像來構思想法，並透過程式碼將這些概念變為現實。對於新技術保持開放的態度，樂於探索各種可能，並享受讓想法落地的過程。`;

	const introductionEn = `
I am a student developer from Taiwan with a deep passion for technology and innovation. Since an early age, I have been fascinated by computer science and started programming at a young age, exploring various fields ranging from **web applications and desktop software to embedded systems and industrial network security**.

I had the honor of representing Taiwan in the **46th WorldSkills Competition (WorldSkills 2022) in the Mobile Robotics category**, where I honed my problem-solving skills and developed a strong engineering mindset. Currently, I am studying at **National Taiwan University of Science and Technology**, continuously learning new technologies and striving to create elegant and efficient solutions.

I am an active contributor to **open-source communities**, where I enjoy sharing code, exchanging ideas, and growing through collaboration. I believe that open-source is more than just a development model—it is a driving force for knowledge sharing and innovation.

I tend to visualize ideas before putting them into words and bring them to life through code. With an open mind toward new technologies, I am always eager to explore possibilities and turn concepts into reality.`;

	const awardsEn = `
| Competition                                                  | Award                         |
| ------------------------------------------------------------ | ----------------------------- |
| 113年國家資通安全研究院網路攻防演練攻擊手                    | Selection Passed 遴選通過     |
| WorldSkills 2022 Special Edition Bordeaux Mobile Robotics    | Medallion for Excellence 優勝 |
| WorldSkills Asia Online Friendly Skills Games 2021 Mobile Robotics | Bronze Medal 第三名           |
| WorldSkills 2021 Mobile Robotics Online Challenge            | Silver Medal 第二名           |
| 109年工業類學生技藝競賽 移動機器人職類                       | Gold Medal 第一名             |
| 46屆世賽第二階段國手選拔賽 移動機器人職類                    | Gold Medal 第一名             |
| 46屆世賽第一階段國手選拔賽 移動機器人職類                    | Gold Medal 第一名(總分最高)   |
| 49屆全國技能競賽 移動機器人職類                              | Gold Medal 第一名             |
| 49屆中區技能競賽 移動機器人職類                              | Silver Medal 第二名           |`;

	const workExperienceEn = `
| Company                                                 | Position                     | Time        |
| ------------------------------------------------------- | ---------------------------- | ----------- |
| [ORing Industrial Networking](https://www.oringnet.com) | PSO Assistant Engineer       | 2025 ~ Now  |
| [ReMiSYS Technology](https://www.remisys.com.tw)        | Software / Firmware Engineer | 2023 ~ 2024 |
`;
</script>

<svelte:head>
	<title>{APP_NAME}</title>
</svelte:head>

<article
	class="flex w-full flex-col gap-10 py-4 sm:gap-10 sm:py-10 md:w-10/12 lg:w-8/12 2xl:w-6/12"
>
	<header class="flex justify-center">
		<Neofetch />
	</header>

	<section class="prose dark:prose-invert">
		<h2>Introduction</h2>
		<!-- <SvelteMarkdown source={introductionZh} /> -->
		<SvelteMarkdown source={introductionEn} />
	</section>

	<section class="prose dark:prose-invert">
		<h2>Awards</h2>
		<SvelteMarkdown source={awardsEn} />
	</section>

	<section class="prose dark:prose-invert">
		<h2>Work Experience</h2>
		<SvelteMarkdown source={workExperienceEn} />
	</section>
</article>

<style lang="postcss">
	section {
		@apply max-w-none;
	}

	h2 {
		@apply mb-2 mt-2 font-mono text-2xl font-bold;
	}

	h2::before {
		content: '#';
		@apply mr-2 text-muted-foreground opacity-50;
	}

	p {
		@apply text-left;
	}
</style>
