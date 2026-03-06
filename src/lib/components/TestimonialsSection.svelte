<script lang="ts">
	const featured = {
		quote: 'Ryan shipped our MVP in half the time we expected. He understood the product vision from day one and delivered something we were proud to launch.',
		author: 'Alex M.',
		role: 'Founder',
	};

	const testimonials = [
		{
			quote: 'Incredible attention to detail. The codebase was clean and the product worked exactly as spec\'d.',
			author: 'Sarah K.',
			role: 'CTO',
		},
		{
			quote: 'We went from idea to live product in 6 weeks. Couldn\'t recommend more highly.',
			author: 'Daniel R.',
			role: 'Founder',
		},
		{
			quote: 'Full-stack, fast, reliable. The best engineering partner we\'ve worked with.',
			author: 'Maya T.',
			role: 'Product Lead',
		},
	];
</script>

<section class="py-24">
	<div class="max-w-6xl mx-auto px-6">
		<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Word on the street...</h2>

		<div class="grid md:grid-cols-3 gap-6">
			<div class="md:col-span-2 bg-white rounded-2xl p-10 border border-gray-200 flex flex-col justify-between">
				<div class="w-12 h-12 rounded-full bg-gray-200 mb-8"></div>
				<blockquote class="text-2xl font-medium text-gray-800 leading-relaxed mb-8">
					"{featured.quote}"
				</blockquote>
				<p class="text-sm font-semibold text-gray-500">
					— {featured.author}, <span class="text-gray-400">{featured.role}</span>
				</p>
			</div>

			<div class="flex flex-col gap-6">
				{#each testimonials as t}
					<div class="bg-white rounded-2xl p-6 border border-gray-200 flex-1">
						<blockquote class="text-gray-700 leading-relaxed mb-4 text-sm">
							"{t.quote}"
						</blockquote>
						<p class="text-xs font-semibold text-gray-500">
							— {t.author}, <span class="text-gray-400">{t.role}</span>
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
