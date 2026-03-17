<script lang="ts">
	import { onMount } from 'svelte';

	let scrolled = $state(false);

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});

	function scrollTo(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {scrolled
		? 'bg-white/80 backdrop-blur-sm'
		: 'bg-white'}"
>
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
		<a
			href="/"
			class="text-base font-semibold tracking-tight text-gray-900"
			style="font-family: var(--font-body)"
		>
			Full Stack Services
		</a>
		<div class="flex items-center gap-6">
			<button
				onclick={() => scrollTo('how-we-work')}
				class="text-sm text-gray-600 transition-colors hover:text-gray-900"
			>
				How We Work
			</button>
			<button
				onclick={() => scrollTo('work')}
				class="text-sm text-gray-600 transition-colors hover:text-gray-900"
			>
				Projects
			</button>
			<a href="/posts" class="text-sm text-gray-600 transition-colors hover:text-gray-900">Posts</a>
			<button
				onclick={() => scrollTo('contact')}
				class="rounded-full px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-105 active:scale-95"
				style="background: var(--color-accent); background-image: linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0)); box-shadow: inset 0 0 0 1px rgba(0,0,0,0.2);"
			>
				Start a Project
			</button>
		</div>
	</div>
</nav>
