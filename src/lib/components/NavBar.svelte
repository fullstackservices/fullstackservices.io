<script lang="ts">
	import { onMount } from 'svelte';

	let scrolled = $state(false);

	onMount(() => {
		const onScroll = () => { scrolled = window.scrollY > 20; };
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}

	function scrollToContact() {
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-white/80 backdrop-blur-sm' : 'bg-white'}">
	<div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
		<a href="/" class="font-semibold text-base tracking-tight text-gray-900" style="font-family: var(--font-body)">
			Full Stack Services
		</a>
		<div class="flex items-center gap-6">
			<button onclick={() => scrollTo('work')} class="text-sm text-gray-600 hover:text-gray-900 transition-colors">
				Work
			</button>
			<button onclick={() => scrollTo('how-we-work')} class="text-sm text-gray-600 hover:text-gray-900 transition-colors">
				How We Work
			</button>
			<a href="/posts" class="text-sm text-gray-600 hover:text-gray-900 transition-colors">Posts</a>
			<button
				onclick={scrollToContact}
				class="px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-200 hover:scale-105 active:scale-95"
				style="background: var(--color-accent); background-image: linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0)); box-shadow: inset 0 0 0 1px rgba(0,0,0,0.2);"
			>
				Start a Project
			</button>
		</div>
	</div>
</nav>
