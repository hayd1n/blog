import type { PageServerLoad } from './$types';
import { getAllPosts } from '$lib/blog';

export const load = (async () => {
	const posts = await getAllPosts();

	return { posts };
}) satisfies PageServerLoad;

export const prerender = true;
export const trailingSlash = 'always';
