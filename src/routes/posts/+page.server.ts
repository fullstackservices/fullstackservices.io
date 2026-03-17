import { getPosts } from '$lib/server/services/posts';

export function load() {
	return { posts: getPosts() };
}
