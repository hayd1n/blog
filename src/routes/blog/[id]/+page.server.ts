import fs from 'node:fs/promises';
import type { EntryGenerator, PageServerLoad } from './$types';
import path from 'node:path';
import { getAllPosts } from '$lib/blog';

export const entries: EntryGenerator = async () => {
	const posts = await getAllPosts();
	return posts.map((id) => ({ id }));
};

export const load = (async ({ params }) => {
	const posts = await getAllPosts();

	const projectRoot = process.cwd();
	const postsPath = path.join(projectRoot, 'src/lib/blog/posts');
	const postData = await fs.readFile(path.join(postsPath, params.id, `post.md`), {
		encoding: 'utf8'
	});

	return {
		post: postData,
		posts
	};
}) satisfies PageServerLoad;

export const prerender = true;
export const trailingSlash = 'always';
