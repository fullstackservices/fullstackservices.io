<script lang="ts">
	function scrollToContact() {
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
	}

	const cards = [
		{ rotate: '-3deg', delay: '0s', color: '#6366f1' },
		{ rotate: '2deg', delay: '0.5s', color: '#f59e0b' },
		{ rotate: '-1.5deg', delay: '1s', color: '#10b981' },
		{ rotate: '3deg', delay: '1.5s', color: '#3b82f6' },
		{ rotate: '-2deg', delay: '2s', color: '#ec4899' },
		{ rotate: '1.5deg', delay: '2.5s', color: '#8b5cf6' },
		{ rotate: '-3deg', delay: '0s', color: '#6366f1' },
		{ rotate: '2deg', delay: '0.5s', color: '#f59e0b' },
		{ rotate: '-1.5deg', delay: '1s', color: '#10b981' },
		{ rotate: '3deg', delay: '1.5s', color: '#3b82f6' },
		{ rotate: '-2deg', delay: '2s', color: '#ec4899' },
		{ rotate: '1.5deg', delay: '2.5s', color: '#8b5cf6' },
	];
</script>

<section class="pt-32 pb-8 overflow-hidden">
	<div class="max-w-4xl mx-auto px-6 text-center">
		<h1 class="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
			Your app idea shaped and shipped.
		</h1>
		<p class="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
			Every great product starts with a blueprint. We help you draw it, shape it, and ship it.
		</p>
		<button
			onclick={scrollToContact}
			class="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
			style="background: var(--color-accent)"
		>
			Start a Project →
		</button>
	</div>

	<div class="marquee-outer mt-16">
		<div class="marquee-track">
			{#each cards as card, i (i)}
				<div
					class="marquee-card"
					style="--card-rotate: {card.rotate}; --float-delay: {card.delay}; --card-color: {card.color}"
				>
					<div class="card-header">
						<div class="dot" style="background: #ef4444"></div>
						<div class="dot" style="background: #f59e0b"></div>
						<div class="dot" style="background: #10b981"></div>
					</div>
					<div class="card-bar" style="background: {card.color}; opacity: 0.15; width: 60%; height: 8px; border-radius: 4px; margin-bottom: 8px;"></div>
					<div class="card-bar" style="background: #e5e7eb; width: 90%; height: 8px; border-radius: 4px; margin-bottom: 8px;"></div>
					<div class="card-bar" style="background: #e5e7eb; width: 75%; height: 8px; border-radius: 4px; margin-bottom: 12px;"></div>
					<div class="card-block" style="background: {card.color}; opacity: 0.12;"></div>
					<div class="card-bar" style="background: #e5e7eb; width: 50%; height: 8px; border-radius: 4px; margin-top: 10px;"></div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.marquee-outer {
		width: 100%;
		overflow: hidden;
		mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
		-webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
		padding: 24px 0;
	}

	.marquee-track {
		display: flex;
		width: max-content;
		gap: 16px;
		animation: marquee 30s linear infinite;
	}

	.marquee-card {
		width: 53vw;
		height: 280px;
		background: white;
		border-radius: 16px;
		padding: 16px;
		border: 1px solid #e5e7eb;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
		transform: rotate(var(--card-rotate));
		animation: float 3.5s ease-in-out infinite;
		animation-delay: var(--float-delay);
		flex-shrink: 0;
	}

	.card-header {
		display: flex;
		gap: 5px;
		margin-bottom: 12px;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.card-block {
		width: 100%;
		height: 40px;
		border-radius: 8px;
	}

	@keyframes marquee {
		from { transform: translateX(0); }
		to   { transform: translateX(-50%); }
	}

	@keyframes float {
		0%, 100% { transform: translateY(0px) rotate(var(--card-rotate)); }
		50%       { transform: translateY(-8px) rotate(var(--card-rotate)); }
	}
</style>
