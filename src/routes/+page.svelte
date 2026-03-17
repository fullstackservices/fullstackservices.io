<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
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

<NavBar />
<HeroSection />
<!-- <TrustBarSection /> -->
<HowWeWorkSection />
<ProjectsSection />
<TestimonialsSection />
<AboutSection />
<ContactSection />
<FooterSection />
