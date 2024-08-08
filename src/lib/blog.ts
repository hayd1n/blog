import path from 'path';
import fs from 'node:fs/promises';

export async function getAllPosts() {
	const projectRoot = process.cwd();
	const postsPath = path.join(projectRoot, 'src/lib/blog/posts');
	const postsDir = await fs.readdir(postsPath);
	const posts = [];
	for (const post of postsDir) {
		const postPath = path.resolve(path.join(postsPath, post));

		const stat = await fs.stat(postPath);
		// skip if not a directory
		if (!stat.isDirectory()) continue;

		posts.push(post);
	}
	return posts;
}
