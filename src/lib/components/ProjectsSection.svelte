<script lang="ts">
	import { fade } from 'svelte/transition';

	let showAll = $state(false);

	const projects = [
		{
			tag: 'AI SaaS',
			title: 'TwinSpeak',
			subtitle: 'AI Voice Cloning SaaS',
			description:
				'Full SaaS shipped to production — auth, payments, edge deployment, sub-30s voice generation.',
			highlights: ['Auth & payments', 'Edge deployment', 'Sub-30s generation'],
			color: '#6366f1',
			image: 'https://cdn.fullstackservices.io/images/twinspeak-3.png',
			imagePosition: 'object-left',
			url: '#'
		},
		{
			tag: 'AI · Music Tech',
			title: 'FretWise.ai',
			subtitle: 'AI Guitar Transcription',
			description:
				'AI-powered guitar tab transcription tool that converts audio to accurate tabs in seconds.',
			highlights: ['200+ signups in first weekend', 'AI transcription', 'Mobile-first'],
			color: '#f59e0b',
			image: 'https://cdn.fullstackservices.io/images/fretwise-1.png',
			imagePosition: 'object-top',
			url: '#'
		},
		{
			tag: 'Web App',
			title: 'Songsterr Downloader',
			subtitle: 'Guitar Tab Downloader',
			description:
				'Popular web app for downloading guitar tabs, reaching massive organic scale through SEO.',
			highlights: ['500K+ daily active users', '#1 Google ranking', 'Zero ad spend'],
			color: '#10b981',
			image: 'https://cdn.fullstackservices.io/images/songsterr-1.png',
			imagePosition: 'object-top',
			url: '#'
		},
		{
			tag: 'Web App',
			title: 'OpenTunings',
			subtitle: 'Interactive Guitar Playground',
			description:
				'A playground for guitar experimentation. Build custom tunings, hear them instantly with web audio synthesis, and discover what other musicians have created.',
			highlights: ['Web audio synthesis', 'Community submissions', 'Live at opentunings.app'],
			color: '#ec4899',
			image: 'https://cdn.fullstackservices.io/images/open-tunings.png',
			imagePosition: 'object-top',
			url: '#'
		},
		{
			tag: 'iOS App · AI',
			title: 'TLDR Generator',
			subtitle: 'AI Conversation Summaries',
			description:
				'Screen record any conversation and get an instant summary with key points. Built for people drowning in group chats and long threads who just need the gist.',
			highlights: ['Live on Apple App Store', 'Context-aware AI summaries', 'React Native · Gemini'],
			color: '#3b82f6',
			image: null,
			imagePosition: 'object-top',
			url: '#'
		}
	];
</script>

{#snippet projectCard(project: (typeof projects)[number], index: number)}
	<div
		class="flex flex-col bg-white {index % 2 === 0
			? 'md:flex-row'
			: 'md:flex-row-reverse'} cursor-default overflow-hidden rounded-2xl border border-[#e4e4e4] transition-all duration-300 hover:shadow-md"
	>
		<div class="relative min-h-48 md:min-h-96 md:w-2/5">
			{#if project.image}
				<img
					src={project.image}
					alt="{project.title} screenshot"
					class="absolute inset-0 h-full w-full object-cover {project.imagePosition}"
				/>
			{:else}
				<div class="absolute inset-0 flex items-center justify-center bg-gray-50">
					<span class="text-9xl font-bold" style="color: {project.color}; opacity: 0.15">
						{project.title[0]}
					</span>
				</div>
			{/if}
		</div>
		<div class="flex flex-col justify-center p-10 md:w-3/5">
			<span
				class="mb-6 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase"
				style="background: #fff0ef; color: var(--color-accent)"
			>
				{project.tag}
			</span>
			<h3 class="mb-1 text-3xl font-bold text-gray-900">{project.title}</h3>
			<p class="mb-4 text-sm text-gray-400">{project.subtitle}</p>
			<p class="mb-4 leading-relaxed text-gray-500">{project.description}</p>
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="mb-6 inline-flex w-fit items-center gap-1 text-sm font-medium transition-opacity hover:opacity-70"
				style="color: var(--color-accent)"
			>
				Visit site →
			</a>
			<ul class="space-y-2">
				{#each project.highlights as highlight (highlight)}
					<li class="flex items-center gap-2 text-sm text-gray-600">
						<span
							class="h-1.5 w-1.5 flex-shrink-0 rounded-full"
							style="background: var(--color-accent)"
						></span>
						<span class="font-bold">{highlight}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/snippet}

<section id="work" class="py-24">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-16">
			<p
				class="mb-4 text-sm font-medium tracking-widest uppercase"
				style="color: var(--color-accent)"
			>
				Work
			</p>
			<h2 class="text-4xl font-bold text-gray-900 md:text-5xl">What we're building...</h2>
		</div>

		<div class="flex flex-col gap-6">
			{#each projects.slice(0, 3) as project, i (project.title)}
				{@render projectCard(project, i)}
			{/each}

			{#if showAll}
				{#each projects.slice(3) as project, i (project.title)}
					<div transition:fade={{ duration: 300 }}>
						{@render projectCard(project, i + 3)}
					</div>
				{/each}
			{/if}
		</div>

		<div class="mt-10 text-center">
			<button
				onclick={() => (showAll = !showAll)}
				class="text-sm text-gray-400 transition-colors hover:text-gray-600"
			>
				{showAll ? '↑ Show less' : '↓ Show more projects'}
			</button>
		</div>
	</div>
</section>
