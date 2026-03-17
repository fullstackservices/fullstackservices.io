<script lang="ts">
	import type { PageData } from './$types';
	import type { Component } from 'svelte';

	let { data }: { data: PageData } = $props();

	const postModules = import.meta.glob<{ default: Component }>('/src/lib/content/posts/*.md');

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function getPostModule() {
		const entry = Object.entries(postModules).find(([path]) =>
			path.includes(`${data.slug}.md`)
		);
		return entry ? entry[1]() : null;
	}

	const postPromise = getPostModule();
</script>

<svelte:head>
	<title>{data.meta.title} — Full Stack Services</title>
	<meta name="description" content={data.meta.description} />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
	<meta property="og:type" content="article" />
</svelte:head>

<main class="min-h-screen bg-stone-50 py-20 px-6">
	<div class="max-w-2xl mx-auto">
		<a href="/posts" class="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8 inline-block">← All posts</a>

		<header class="mb-12">
			<p class="text-sm text-gray-400 mb-4">{formatDate(data.meta.date)}</p>
			<h1 class="text-4xl font-bold text-gray-900 leading-tight" style="font-family: var(--font-heading)">
				{data.meta.title}
			</h1>
		</header>

		{#await postPromise}
			<p class="text-gray-400">Loading...</p>
		{:then mod}
			{#if mod}
				<div class="prose prose-stone max-w-none">
					<mod.default />
				</div>
			{/if}
		{/await}
	</div>
</main>
