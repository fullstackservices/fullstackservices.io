<script lang="ts">
	import { fade } from 'svelte/transition';

	let showAll = $state(false);

	const projects = [
		{
			tag: 'AI SaaS',
			title: 'TwinSpeak',
			subtitle: 'AI Voice Cloning SaaS',
			description: 'Full SaaS shipped to production — auth, payments, edge deployment, sub-30s voice generation.',
			highlights: ['Auth & payments', 'Edge deployment', 'Sub-30s generation'],
			color: '#6366f1',
		},
		{
			tag: 'AI · Music Tech',
			title: 'FretWise.ai',
			subtitle: 'AI Guitar Transcription',
			description: 'AI-powered guitar tab transcription tool that converts audio to accurate tabs in seconds.',
			highlights: ['200+ signups in first weekend', 'AI transcription', 'Mobile-first'],
			color: '#f59e0b',
		},
		{
			tag: 'Browser Extension',
			title: 'Songsterr Downloader',
			subtitle: 'Browser Extension',
			description: 'Chrome extension for downloading guitar tabs, reaching massive organic scale through SEO.',
			highlights: ['500K+ daily active users', '#1 Google ranking', 'Zero ad spend'],
			color: '#10b981',
		},
		{
			tag: 'Web App',
			title: 'OpenTunings',
			subtitle: 'Interactive Guitar Playground',
			description: 'A playground for guitar experimentation. Build custom tunings, hear them instantly with web audio synthesis, and discover what other musicians have created.',
			highlights: ['Web audio synthesis', 'Community submissions', 'Live at opentunings.app'],
			color: '#ec4899',
		},
		{
			tag: 'iOS App · AI',
			title: 'TLDR Generator',
			subtitle: 'AI Conversation Summaries',
			description: 'Screen record any conversation and get an instant summary with key points. Built for people drowning in group chats and long threads who just need the gist.',
			highlights: ['Live on Apple App Store', 'Context-aware AI summaries', 'React Native · Gemini'],
			color: '#3b82f6',
		},
	];
</script>

<section id="work" class="py-24">
	<div class="max-w-6xl mx-auto px-6">
		<div class="mb-16">
			<p class="text-sm font-medium tracking-widest uppercase mb-4" style="color: var(--color-accent)">Work</p>
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900">What we're building...</h2>
		</div>

		<div class="flex flex-col gap-6">
			{#each projects.slice(0, 3) as project (project.title)}
				<div class="flex flex-col md:flex-row rounded-2xl border border-[#e4e4e4] overflow-hidden transition-all duration-300 hover:shadow-md cursor-default">
					<div
						class="md:w-2/5 min-h-48 md:min-h-80 flex items-center justify-center"
						style="background: {project.color}18"
					>
						<span class="text-8xl font-bold opacity-20" style="color: {project.color}">
							{project.title[0]}
						</span>
					</div>
					<div class="md:w-3/5 p-10 flex flex-col justify-center">
						<span class="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 w-fit" style="background: #fff0ef; color: var(--color-accent)">
							{project.tag}
						</span>
						<h3 class="text-3xl font-bold text-gray-900 mb-1">{project.title}</h3>
						<p class="text-sm text-gray-400 mb-4">{project.subtitle}</p>
						<p class="text-gray-500 leading-relaxed mb-6">{project.description}</p>
						<ul class="space-y-2">
							{#each project.highlights as highlight}
								<li class="flex items-center gap-2 text-sm text-gray-600">
									<span class="w-1.5 h-1.5 rounded-full flex-shrink-0" style="background: var(--color-accent)"></span>
									{highlight}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}

			{#if showAll}
				{#each projects.slice(3) as project (project.title)}
					<div
						transition:fade={{ duration: 300 }}
						class="flex flex-col md:flex-row rounded-2xl border border-[#e4e4e4] overflow-hidden transition-all duration-300 hover:shadow-md cursor-default"
					>
						<div
							class="md:w-2/5 min-h-48 md:min-h-80 flex items-center justify-center"
							style="background: {project.color}18"
						>
							<span class="text-8xl font-bold opacity-20" style="color: {project.color}">
								{project.title[0]}
							</span>
						</div>
						<div class="md:w-3/5 p-10 flex flex-col justify-center">
							<span class="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 w-fit" style="background: #fff0ef; color: var(--color-accent)">
								{project.tag}
							</span>
							<h3 class="text-3xl font-bold text-gray-900 mb-1">{project.title}</h3>
							<p class="text-sm text-gray-400 mb-4">{project.subtitle}</p>
							<p class="text-gray-500 leading-relaxed mb-6">{project.description}</p>
							<ul class="space-y-2">
								{#each project.highlights as highlight}
									<li class="flex items-center gap-2 text-sm text-gray-600">
										<span class="w-1.5 h-1.5 rounded-full flex-shrink-0" style="background: var(--color-accent)"></span>
										{highlight}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/each}
			{/if}
		</div>

		<div class="mt-10 text-center">
			<button
				onclick={() => showAll = !showAll}
				class="text-sm text-gray-400 hover:text-gray-600 transition-colors"
			>
				{showAll ? '↑ Show less' : '↓ Show more projects'}
			</button>
		</div>
	</div>
</section>
