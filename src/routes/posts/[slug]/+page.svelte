<script lang="ts">
	import type { PageData } from './$types';
	import type { PostFrontmatter } from '$lib/types';
	import type { Component } from 'svelte';

	let { data }: { data: PageData } = $props();

	const postModules = import.meta.glob<{ default: Component; metadata: PostFrontmatter }>(
		'/src/lib/content/posts/*.md',
		{ eager: true }
	);

	const PostComponent = Object.values(postModules).find(
		(mod) => mod.metadata.slug === data.slug
	)?.default;

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{data.meta.title} — Full Stack Services</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:type" content="article" />
</svelte:head>

<main class="min-h-screen bg-stone-50 pt-32 pb-20 px-6">
	<div class="max-w-2xl mx-auto">
		<a href="/posts" class="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-10 inline-block">← All posts</a>

		<header class="mb-12">
			<p class="text-sm text-gray-400 mb-4">{formatDate(data.meta.date)}</p>
			<h1 class="text-5xl font-bold text-gray-900 leading-tight">
				{data.meta.title}
			</h1>
		</header>

		{#if PostComponent}
			<div class="prose prose-stone max-w-none">
				<PostComponent />
			</div>
		{/if}
	</div>
</main>
