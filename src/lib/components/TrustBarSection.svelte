<script lang="ts">
	import fluent from '$lib/assets/companies/fluent.png';
	import cityhive from '$lib/assets/companies/cityhive.png';
	import cymbio from '$lib/assets/companies/cymbio.png';
	import spring from '$lib/assets/companies/spring.svg';

	const logos = [
		{ src: fluent, name: 'Fluent' },
		{ src: cityhive, name: 'CityHive' },
		{ src: cymbio, name: 'Cymbio' },
		{ src: spring, name: 'Spring' }
	];
</script>

<section class="py-12">
	<div class="mx-auto max-w-4xl px-6 text-center">
		<p class="mb-8 text-sm font-medium tracking-widest text-gray-400 uppercase">
			Trusted by leading companies
		</p>
		<div class="flex flex-wrap items-center justify-center gap-10">
			{#each logos as logo (logo.name)}
				<img src={logo.src} alt={logo.name} class="h-8 w-32 object-contain" />
			{/each}
		</div>
	</div>
</section>
