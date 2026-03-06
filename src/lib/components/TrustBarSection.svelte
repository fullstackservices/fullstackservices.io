<script lang="ts">
	const logos = [
		{ initial: 'AC', name: 'Acme Corp' },
		{ initial: 'NX', name: 'Nexus Labs' },
		{ initial: 'PK', name: 'Peakflow' },
		{ initial: 'VN', name: 'Vantage' },
	];
</script>

<section class="py-12">
	<div class="max-w-4xl mx-auto px-6 text-center">
		<p class="text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">
			Trusted by leading companies
		</p>
		<div class="flex items-center justify-center gap-8 flex-wrap">
			{#each logos as logo}
				<div class="flex items-center justify-center w-24 h-12 rounded-xl bg-white border border-gray-200 text-gray-400 text-sm font-semibold tracking-wide">
					{logo.initial}
				</div>
			{/each}
		</div>
	</div>
</section>
