<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import TrustBarSection from '$lib/components/TrustBarSection.svelte';
	import HowWeWorkSection from '$lib/components/HowWeWorkSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import FooterSection from '$lib/components/FooterSection.svelte';
</script>

<svelte:head>
	<title>Full Stack Services — Engineering for Founders</title>
</svelte:head>

<div class="progress-bar" aria-hidden="true"></div>

<NavBar />
<HeroSection />
<TrustBarSection />
<HowWeWorkSection />
<ProjectsSection />
<TestimonialsSection />
<AboutSection />
<ContactSection />
<FooterSection />

<style>
	.progress-bar {
		position: fixed;
		top: 0;
		left: 0;
		height: 3px;
		background: #FF524B;
		z-index: 100;
		animation: load 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	@keyframes load {
		from { width: 0%; }
		to { width: 100%; }
	}
</style>
