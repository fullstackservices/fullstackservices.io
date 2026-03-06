<script lang="ts">
	function scrollToContact() {
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<section class="relative min-h-screen flex items-center pt-16 overflow-hidden">
	<div class="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
		<div class="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]" style="background: var(--color-accent); transform: translate(30%, -20%);"></div>
		<div class="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]" style="background: var(--color-accent); transform: translate(-30%, 20%);"></div>
	</div>

	<div class="relative max-w-6xl mx-auto px-6 py-24">
		<div class="max-w-3xl">
			<p class="text-sm font-medium tracking-widest uppercase mb-6" style="color: var(--color-accent)">
				Full-Stack Engineering
			</p>
			<h1 class="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-8">
				Your idea,<br />engineered<br />and shipped.
			</h1>
			<p class="text-xl text-gray-500 leading-relaxed max-w-xl mb-10">
				I help founders and teams turn product ideas into production-ready software — fast. From AI pipelines to consumer apps, I build things that work and scale.
			</p>
			<button
				onclick={scrollToContact}
				class="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
				style="background: var(--color-accent)"
			>
				Start a Project
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</button>
		</div>
	</div>
</section>
