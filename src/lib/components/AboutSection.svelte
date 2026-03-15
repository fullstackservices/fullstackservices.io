<script lang="ts">
	const stats = [
		{ value: '7+', label: 'Years experience' },
		{ value: '500K+', label: 'Daily active users' },
		{ value: '3+', label: 'Shipped products' }
	];
</script>

<section class="bg-gray-50 py-24">
	<div class="mx-auto max-w-6xl px-6">
		<div class="flex flex-col gap-12">
			<!-- Photo: centered top on desktop (order-1), after stats on mobile (order-3) -->
			<div class="order-3 flex justify-center md:order-1">
				<div
					class="flex h-36 w-36 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-gray-100"
				>
					<span class="text-xs tracking-wide text-gray-400">Photo</span>
				</div>
			</div>

			<!-- Text + Stats: first on mobile (order-1), second on desktop (order-2) -->
			<div class="order-1 grid items-center gap-16 md:order-2 md:grid-cols-2">
				<div>
					<p
						class="mb-4 text-sm font-medium tracking-widest uppercase"
						style="color: var(--color-accent)"
					>
						About
					</p>
					<h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Engineering with purpose</h2>
					<p class="mb-4 leading-relaxed text-gray-500">
						I'm Ryan — a full-stack engineer and indie founder with 7+ years building consumer
						products and AI-powered software. I've shipped apps used by hundreds of thousands of
						people daily, and I specialize in the kind of work that sits at the intersection of great
						engineering and real user value.
					</p>
					<p class="leading-relaxed text-gray-500">
						My background spans ML pipelines, SaaS architecture, browser extensions, and mobile apps.
						Based in Tel Aviv, working with founders and teams globally.
					</p>
				</div>

				<div class="grid grid-cols-3 gap-6">
					{#each stats as stat (stat.label)}
						<div class="rounded-2xl border border-[#e4e4e4] bg-white p-6 text-center">
							<p
								class="mb-2 text-3xl font-bold"
								style="font-family: var(--font-heading); color: var(--color-accent)"
							>
								{stat.value}
							</p>
							<p class="text-sm text-gray-500">{stat.label}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
