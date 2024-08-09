import fs from 'node:fs/promises';
import type { EntryGenerator, PageServerLoad } from './$types';
import path from 'node:path';
import { getAllPosts, type PostFrontMatter } from '$lib/blog';
import * as toml from 'js-toml';

export const entries: EntryGenerator = async () => {
	const posts = await getAllPosts();
	return posts.map((id) => ({ id }));
};

export const load: PageServerLoad = async ({ params }) => {
	const posts = await getAllPosts();

	const projectRoot = process.cwd();
	const postsPath = path.join(projectRoot, 'src/lib/blog/posts');

	// Load post data
	const fileContent = await fs.readFile(path.join(postsPath, params.id, `post.md`), {
		encoding: 'utf8'
	});

	const tomlRegex = /^---\n([\s\S]*?)\n---/;
	const match = tomlRegex.exec(fileContent);

	if (!match) {
		throw new Error('Invalid post format');
	}

	const tomlContent = match[1];
	const markdownContent = fileContent.slice(match[0].length).trim();

	try {
		type FrontMatterToml = {
			title: string;
			date: string;
			tags: string[];
			categories: string[];
			excerpt: string;
		};

		// Parse TOML front matter
		const frontMatterToml = toml.load(tomlContent) as FrontMatterToml;

		const frontMatter: PostFrontMatter = {
			title: frontMatterToml.title,
			date: new Date(frontMatterToml.date),
			tags: frontMatterToml.tags,
			categories: frontMatterToml.categories,
			excerpt: frontMatterToml.excerpt
		};

		return {
			frontMatter,
			content: markdownContent,
			posts
		};
	} catch (error) {
		throw new Error(`Error parsing TOML: ${error}`);
	}
};

export const prerender = true;
export const trailingSlash = 'always';
