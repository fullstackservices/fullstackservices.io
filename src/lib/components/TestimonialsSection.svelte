<script lang="ts">
	import fluent from '$lib/assets/companies/fluent.png';
	import nikita from '$lib/assets/people/nikita.jpeg';

	const featured = {
		quote:
			'Ryan shipped our MVP in half the time we expected. He understood the product vision from day one and delivered something we were proud to launch.',
		author: 'Alexandre D.',
		role: 'Founder',
		company: 'Fluent AI',
		headshot:
			'https://media.licdn.com/dms/image/v2/D4E03AQFMn117tcXotg/profile-displayphoto-shrink_400_400/B4EZcwzfRVH0Ak-/0/1748870493790?e=1775088000&v=beta&t=FSv51A0AeSpExsqsc1xbDJ_x6wQne8pZi6Q_xHK4A4o',
		companyLogo: fluent
	};

	const testimonials = [
		{
			quote:
				"Incredible attention to detail. The codebase was clean and the product worked exactly as spec'd.",
			author: 'Nikita B.',
			role: 'Head of Engineering',
			company: 'Company',
			headshot: nikita,
			companyLogo:
				'https://media.licdn.com/dms/image/v2/D560BAQEJLfel8KUJSg/company-logo_200_200/B56Zuav1XoKYAM-/0/1767827790023/alphasignal_logo?e=1775088000&v=beta&t=dfGKPZCmNsLATn3IaiiSUqXOUqTBSDXlHElrzUbfNGo'
		},
		{
			quote: "We went from idea to live product in 6 weeks. Couldn't recommend more highly.",
			author: 'Almog C.',
			role: 'Tech Lead',
			company: 'Company',
			headshot:
				'https://media.licdn.com/dms/image/v2/D4D03AQE_57tTZgnjeA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710870138909?e=1775088000&v=beta&t=SWmer4x_tCzJ2JbXjhszNth9SG1svGP-BajgHsvigW8',
			companyLogo:
				'https://images.squarespace-cdn.com/content/v1/624e9a19a495f318719230e0/e9b2f358-b7f1-4e61-9e02-e80bf220f4f0/Stigg_Logo_ForLightBG%402x.png'
		},
		{
			quote: "Full-stack, fast, reliable. The best engineering partner we've worked with.",
			author: 'Nimrod G.',
			role: 'Staff Engineer',
			company: 'Company',
			headshot:
				'https://media.licdn.com/dms/image/v2/C4D03AQE4p-KEirmidQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1586763771597?e=1775088000&v=beta&t=jD5es5RmIAzvQi1eh97GfR2MStvhZAiAM46tGmm5mp0',
			companyLogo: 'https://lsvp.com/wp-content/uploads/2023/03/Navan.png'
		}
	];
</script>

{#snippet authorFooter(person: typeof featured, compact = false)}
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-3">
			<img
				src={person.headshot}
				alt={person.author}
				class="{compact ? 'h-9 w-9' : 'h-11 w-11'} rounded-full object-cover"
			/>
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
				<blockquote class="mb-8 text-2xl leading-relaxed font-medium text-gray-800">
					"{featured.quote}"
				</blockquote>
				{@render authorFooter(featured)}
			</div>

			<div class="flex min-h-[480px] flex-col gap-6">
				{#each testimonials as t (t.author)}
					<div
						class="flex flex-1 flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6"
					>
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
