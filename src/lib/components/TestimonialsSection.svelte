<script lang="ts">
	const featured = {
		quote: 'Ryan shipped our MVP in half the time we expected. He understood the product vision from day one and delivered something we were proud to launch.',
		author: 'Alex M.',
		role: 'Founder',
		company: 'Company',
		headshot: null as string | null,
		companyLogo: null as string | null
	};

	const testimonials = [
		{
			quote: "Incredible attention to detail. The codebase was clean and the product worked exactly as spec'd.",
			author: 'Sarah K.',
			role: 'CTO',
			company: 'Company',
			headshot: null as string | null,
			companyLogo: null as string | null
		},
		{
			quote: 'We went from idea to live product in 6 weeks. Couldn\'t recommend more highly.',
			author: 'Daniel R.',
			role: 'Founder',
			company: 'Company',
			headshot: null as string | null,
			companyLogo: null as string | null
		},
		{
			quote: 'Full-stack, fast, reliable. The best engineering partner we\'ve worked with.',
			author: 'Maya T.',
			role: 'Product Lead',
			company: 'Company',
			headshot: null as string | null,
			companyLogo: null as string | null
		}
	];
</script>

{#snippet authorFooter(person: typeof featured, compact = false)}
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-3">
			{#if person.headshot}
				<img
					src={person.headshot}
					alt={person.author}
					class="{compact ? 'h-9 w-9' : 'h-11 w-11'} rounded-full object-cover"
				/>
			{:else}
				<div class="{compact ? 'h-9 w-9' : 'h-11 w-11'} rounded-full bg-gray-200"></div>
			{/if}
			<div>
				<p class="{compact ? 'text-xs' : 'text-sm'} font-semibold text-gray-800">{person.author}</p>
				<p class="{compact ? 'text-xs' : 'text-sm'} text-gray-400">{person.role}</p>
			</div>
		</div>
		{#if person.companyLogo}
			<img src={person.companyLogo} alt={person.company} class="h-7 object-contain opacity-60" />
		{:else}
			<div class="h-6 w-16 rounded bg-gray-100"></div>
		{/if}
	</div>
{/snippet}

<section class="py-24">
	<div class="mx-auto max-w-6xl px-6">
		<h2 class="mb-12 text-4xl font-bold text-gray-900 md:text-5xl">Word on the street...</h2>

		<div class="grid gap-6 md:grid-cols-3">
			<div
				class="flex min-h-[480px] flex-col justify-between rounded-2xl border border-gray-200 bg-white p-10 md:col-span-2"
			>
				<blockquote class="mb-8 text-2xl font-medium leading-relaxed text-gray-800">
					"{featured.quote}"
				</blockquote>
				{@render authorFooter(featured)}
			</div>

			<div class="flex min-h-[480px] flex-col gap-6">
				{#each testimonials as t (t.author)}
					<div class="flex flex-1 flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6">
						<blockquote class="mb-4 text-sm leading-relaxed text-gray-700">
							"{t.quote}"
						</blockquote>
						{@render authorFooter(t, true)}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
