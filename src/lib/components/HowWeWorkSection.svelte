<script lang="ts">
	import hww from '$lib/assets/landing-page/how-we-work.png';
	import bas from '$lib/assets/landing-page/build-and-ship.png';
	import mas from '$lib/assets/landing-page/maintain-and-optimize.png';
</script>

<section id="how-we-work" class="py-24">
	<div class="mx-auto max-w-6xl px-6">
		<h2 class="mb-12 text-4xl font-bold text-gray-900 md:text-5xl">How we work</h2>

		<div class="grid gap-6 md:grid-cols-3">
			<div class="overflow-hidden rounded-2xl border border-gray-200 bg-white">
				<div class="h-48 overflow-hidden bg-gray-100">
					<img src={hww} alt="Discovery process" class="h-full w-full object-cover object-top" />
				</div>
				<div class="p-8">
					<h3 class="mb-3 text-xl font-bold text-gray-900">Discovery</h3>
					<p class="leading-relaxed text-gray-500">
						Every project starts with a 1–2 week discovery, where I define features, estimate scope,
						and map the plan.
					</p>
				</div>
			</div>

			<div class="overflow-hidden rounded-2xl border border-gray-200 bg-white">
				<div class="h-48 overflow-hidden bg-gray-100">
					<img src={bas} alt="Build and ship" class="h-full w-full object-cover object-top" />
				</div>
				<div class="p-8">
					<h3 class="mb-3 text-xl font-bold text-gray-900">Build & Ship</h3>
					<p class="leading-relaxed text-gray-500">
						I build in 1–6 week cycles focused on real progress. Each week delivers working software
						you can test or launch.
					</p>
				</div>
			</div>

			<div class="overflow-hidden rounded-2xl border border-gray-200 bg-white">
				<div class="h-48 overflow-hidden bg-gray-100">
					<img
						src={mas}
						alt="Maintain and optimize"
						class="h-full w-full object-cover object-top"
					/>
				</div>
				<div class="p-8">
					<h3 class="mb-3 text-xl font-bold text-gray-900">Maintain & Optimize</h3>
					<p class="leading-relaxed text-gray-500">
						After launch, I'll help you support your app. I'll track performance, fix bugs, and
						improve based on real user feedback.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
