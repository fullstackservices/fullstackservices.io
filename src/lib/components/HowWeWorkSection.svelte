<script lang="ts">
	const steps = [
		{
			number: '01',
			title: 'Scope & Strategy',
			description: 'We start with a focused discovery session to define the problem, align on scope, and map a realistic plan. No surprises, no bloat.',
		},
		{
			number: '02',
			title: 'Build & Ship',
			description: 'I work in tight cycles with working software delivered at every step. You can test it, use it, or launch it — before the project is even done.',
		},
		{
			number: '03',
			title: 'Launch & Iterate',
			description: 'After launch I help you monitor performance, fix what needs fixing, and double down on what\'s working.',
		},
	];
</script>

<section class="py-24 bg-gray-50">
	<div class="max-w-6xl mx-auto px-6">
		<div class="mb-16">
			<p class="text-sm font-medium tracking-widest uppercase mb-4" style="color: var(--color-accent)">Process</p>
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900">How I work</h2>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			{#each steps as step}
				<div class="bg-white rounded-2xl p-8 border border-[#e4e4e4]">
					<span class="text-sm font-semibold tracking-widest" style="color: var(--color-accent)">{step.number}</span>
					<h3 class="text-xl font-bold text-gray-900 mt-4 mb-3">{step.title}</h3>
					<p class="text-gray-500 leading-relaxed">{step.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
