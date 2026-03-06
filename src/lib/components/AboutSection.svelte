<script lang="ts">
	const stats = [
		{ value: '7+', label: 'Years experience' },
		{ value: '500K+', label: 'Daily active users' },
		{ value: '3+', label: 'Shipped products' },
	];
</script>

<section class="py-24 bg-gray-50">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid md:grid-cols-2 gap-16 items-center">
			<div>
				<p class="text-sm font-medium tracking-widest uppercase mb-4" style="color: var(--color-accent)">About</p>
				<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Engineering with purpose</h2>
				<p class="text-gray-500 leading-relaxed mb-4">
					I'm Ryan — a full-stack engineer and indie founder with 7+ years building consumer products and AI-powered software. I've shipped apps used by hundreds of thousands of people daily, and I specialize in the kind of work that sits at the intersection of great engineering and real user value.
				</p>
				<p class="text-gray-500 leading-relaxed">
					My background spans ML pipelines, SaaS architecture, browser extensions, and mobile apps. Based in Tel Aviv, working with founders and teams globally.
				</p>
			</div>

			<div class="grid grid-cols-3 gap-6">
				{#each stats as stat}
					<div class="bg-white rounded-2xl p-6 border border-[#e4e4e4] text-center">
						<p class="text-3xl font-bold mb-2" style="font-family: var(--font-heading); color: var(--color-accent)">{stat.value}</p>
						<p class="text-sm text-gray-500">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
