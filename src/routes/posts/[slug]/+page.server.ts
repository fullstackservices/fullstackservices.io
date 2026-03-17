import { error } from '@sveltejs/kit';
import { getPostMeta, getAllSlugs } from '$lib/server/services/posts';

export function load({ params }: { params: { slug: string } }) {
	const meta = getPostMeta(params.slug);
	if (!meta) throw error(404, 'Post not found');
	return { meta, slug: params.slug };
}

export function entries() {
	return getAllSlugs().map((slug) => ({ slug }));
}
