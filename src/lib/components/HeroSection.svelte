<script lang="ts">
	import squiggle from '$lib/assets/squiggle.svg';

	function scrollToContact() {
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
	}

	const rotations = ['-3deg', '2deg', '-1.5deg', '3deg', '-2deg', '1.5deg'];
	const delays = ['0s', '0.5s', '1s', '1.5s', '2s', '2.5s'];

	const baseImages = [
		{ src: 'https://cdn.fullstackservices.io/images/twinspeak.png', label: 'TwinSpeak' },
		{ src: 'https://cdn.fullstackservices.io/images/fretwise-1.png', label: 'FretWise.ai' },
		{ src: 'https://cdn.fullstackservices.io/images/open-tunings.png', label: 'OpenTunings' },
		{ src: 'https://cdn.fullstackservices.io/images/songsterr-1.png', label: 'Songsterr Downloader' },
		{ src: 'https://cdn.fullstackservices.io/images/fretwise-2.png', label: 'FretWise.ai' },
	];

	const marqueeItems = [...baseImages, ...baseImages].map((img, i) => ({
		...img,
		rotate: rotations[i % rotations.length],
		delay: delays[i % delays.length],
	}));
</script>

<section class="pt-32 pb-8 overflow-hidden">
	<div class="max-w-4xl mx-auto px-6 text-center">
		<h1 class="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-12">
			Your app idea<br />
			shaped and <span class="relative inline-block">
				shipped.
				<img
					src={squiggle}
					alt=""
					aria-hidden="true"
					class="absolute left-0 w-full pointer-events-none"
					style="bottom: -8px; height: 20px; object-fit: fill;"
				/>
			</span>
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
			{#each marqueeItems as item, i (i)}
				<div
					class="marquee-card"
					style="--card-rotate: {item.rotate}; --float-delay: {item.delay}"
				>
					<div class="card-header">
						<div class="dot" style="background: #ef4444"></div>
						<div class="dot" style="background: #f59e0b"></div>
						<div class="dot" style="background: #10b981"></div>
						<span class="card-label">{item.label}</span>
					</div>
					<img src={item.src} alt={item.label} class="card-screenshot" />
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
		animation: marquee 45s linear infinite;
	}

	.marquee-card {
		width: 360px;
		height: 260px;
		background: white;
		border-radius: 16px;
		padding: 12px;
		border: 1px solid #e5e7eb;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
		transform: rotate(var(--card-rotate));
		animation: float 3.5s ease-in-out infinite;
		animation-delay: var(--float-delay);
		flex-shrink: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 5px;
		margin-bottom: 10px;
		flex-shrink: 0;
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.card-label {
		font-size: 11px;
		font-weight: 500;
		color: #9ca3af;
		margin-left: 6px;
	}

	.card-screenshot {
		flex: 1;
		width: 100%;
		min-height: 0;
		object-fit: cover;
		object-position: top;
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
