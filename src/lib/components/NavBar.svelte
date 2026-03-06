<script lang="ts">
	import { onMount } from 'svelte';

	let scrolled = $state(false);

	onMount(() => {
		const onScroll = () => { scrolled = window.scrollY > 20; };
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});

	function scrollToContact() {
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}">
	<div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
		<a href="/" class="font-semibold text-base tracking-tight text-gray-900" style="font-family: var(--font-body)">
			Full Stack Services
		</a>
		<button
			onclick={scrollToContact}
			class="px-5 py-2 rounded-full text-sm font-medium text-white transition-all duration-200 hover:scale-105 active:scale-95"
			style="background: var(--color-accent)"
		>
			Start a Project
		</button>
	</div>
</nav>
