import type { PostFrontmatter, PostMeta } from '$lib/types';

const postModules = import.meta.glob<{ metadata: PostFrontmatter }>('/src/lib/content/posts/*.md', {
	eager: true
});

function toPostMeta({ title, date, description, slug }: PostFrontmatter): PostMeta {
	return { title, date, description, slug };
}

function getPublishedPosts(): PostFrontmatter[] {
	return Object.values(postModules)
		.map((mod) => mod.metadata)
		.filter((meta) => meta.published);
}

export function getPosts(): PostMeta[] {
	return getPublishedPosts()
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.map(toPostMeta);
}

export function getPostMeta(slug: string): PostMeta | null {
	const post = getPublishedPosts().find((meta) => meta.slug === slug);
	return post ? toPostMeta(post) : null;
}

export function getAllSlugs(): string[] {
	return getPublishedPosts().map((meta) => meta.slug);
}
