<script lang="ts">
	import fluent from '$lib/assets/companies/fluent.png';
	import cityhive from '$lib/assets/companies/cityhive.png';
	import cymbio from '$lib/assets/companies/cymbio.png';
	import spring from '$lib/assets/companies/spring.svg';

	const logos = [
		{ src: fluent, name: 'Fluent', url: 'https://fluentai.pro/' },
		{ src: cityhive, name: 'CityHive', url: 'https://cityhive.net/' },
		{ src: cymbio, name: 'Cymbio', url: 'https://cym.bio/' },
		{ src: spring, name: 'Spring', url: 'https://spring.new/' }
	];
</script>

<section class="py-12">
	<div class="mx-auto max-w-4xl px-6 text-center">
		<p class="mb-8 text-sm font-medium tracking-widest text-gray-400 uppercase">
			Trusted by leading companies
		</p>
		<div class="flex flex-wrap items-center justify-center gap-12">
			{#each logos as logo (logo.name)}
				<a
					href={logo.url}
					target="_blank"
					rel="noopener noreferrer"
					class="opacity-100 transition-opacity duration-300 hover:opacity-60"
				>
					<img src={logo.src} alt={logo.name} class="h-10 w-36 object-contain" />
				</a>
			{/each}
		</div>
	</div>
</section>
