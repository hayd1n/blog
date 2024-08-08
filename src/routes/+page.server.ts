import type { EntryGenerator, PageServerLoad } from './$types';
import { getAllPosts } from '$lib/blog';

export const entries: EntryGenerator = async () => {
	const posts = await getAllPosts();
	return posts.map((id) => ({ id }));
};

export const load = (async () => {
	const posts = await getAllPosts();

	return { posts };
}) satisfies PageServerLoad;

export const prerender = true;
export const trailingSlash = 'always';
