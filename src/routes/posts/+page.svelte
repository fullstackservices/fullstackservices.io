<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Posts — Full Stack Services</title>
	<meta name="description" content="Thoughts on software engineering, AI, and building products." />
</svelte:head>

<main class="min-h-screen bg-stone-50 py-20 px-6">
	<div class="max-w-4xl mx-auto">
		<a href="/" class="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8 inline-block">← Back home</a>
		<h1 class="text-5xl font-bold text-gray-900 mb-4" style="font-family: var(--font-heading)">Posts</h1>
		<p class="text-gray-500 mb-12">Thoughts on software engineering, AI, and building products.</p>

		{#if data.posts.length === 0}
			<p class="text-gray-400">No posts yet. Check back soon.</p>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each data.posts as post (post.slug)}
					<a
						href="/posts/{post.slug}"
						class="group block bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-[#FF524B] hover:shadow-md transition-all duration-200"
					>
						<p class="text-sm text-gray-400 mb-3">{formatDate(post.date)}</p>
						<h2 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#FF524B] transition-colors" style="font-family: var(--font-heading)">
							{post.title}
						</h2>
						<p class="text-gray-500 text-sm leading-relaxed">{post.description}</p>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</main>
