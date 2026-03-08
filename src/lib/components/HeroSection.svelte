<script lang="ts">
	import squiggle from '$lib/assets/squiggle.svg';

	function scrollToContact() {
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
	}

	const rotations = ['-3deg', '2deg', '-1.5deg', '3deg', '-2deg', '1.5deg'];
	const delays = ['0s', '0.5s', '1s', '1.5s', '2s', '2.5s'];

	const baseImages = [
		{ src: 'https://cdn.fullstackservices.io/images/twinspeak-2.png', label: 'TwinSpeak' },
		{ src: 'https://cdn.fullstackservices.io/images/fretwise-1.png', label: 'FretWise.ai' },
		{ src: 'https://cdn.fullstackservices.io/images/open-tunings.png', label: 'OpenTunings' },
		{ src: 'https://cdn.fullstackservices.io/images/fretwise-2.png', label: 'FretWise.ai' }
	];

	const marqueeItems = [...baseImages, ...baseImages].map((img, i) => ({
		...img,
		rotate: rotations[i % rotations.length],
		delay: delays[i % delays.length]
	}));
</script>

<section class="overflow-hidden pt-32 pb-8">
	<div class="mx-auto max-w-4xl px-6 text-center">
		<h1 class="mb-12 text-5xl leading-[1.1] font-bold tracking-tight text-gray-900 md:text-7xl">
			Your app idea<br />
			shaped and
			<span class="relative inline-block">
				shipped.
				<img
					src={squiggle}
					alt=""
					aria-hidden="true"
					class="pointer-events-none absolute left-0 w-full"
					style="bottom: -8px; height: 20px; object-fit: fill;"
				/>
			</span>
		</h1>
		<p class="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-gray-500">
			Every great product starts with a blueprint. We help you draw it, shape it, and ship it.
		</p>
		<button
			onclick={scrollToContact}
			class="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
			style="background: var(--color-accent)"
		>
			Start a Project →
		</button>
	</div>

	<div class="marquee-outer mt-16">
		<div class="marquee-track">
			{#each marqueeItems as item, i (i)}
				<img
					src={item.src}
					alt={item.label}
					class="marquee-card"
					style="--card-rotate: {item.rotate}; --float-delay: {item.delay}"
				/>
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
		width: 600px;
		height: 420px;
		border-radius: 16px;
		border: 1px solid #e5e7eb;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
		object-fit: cover;
		object-position: top;
		transform: rotate(var(--card-rotate));
		animation: float 3.5s ease-in-out infinite;
		animation-delay: var(--float-delay);
		flex-shrink: 0;
	}

	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px) rotate(var(--card-rotate));
		}
		50% {
			transform: translateY(-8px) rotate(var(--card-rotate));
		}
	}
</style>
