<script lang="ts">
	import hww from '$lib/assets/how-we-work.png';
</script>

<section class="py-24">
	<div class="max-w-6xl mx-auto px-6">
		<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-12">How we work</h2>

		<div class="grid md:grid-cols-3 gap-6">
			<div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
				<div class="bg-gray-100 h-48 overflow-hidden">
					<img src={hww} alt="Discovery process" class="w-full h-full object-cover object-top" />
				</div>
				<div class="p-8">
					<h3 class="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
					<p class="text-gray-500 leading-relaxed">
						Every project starts with a 1–2 week discovery, where we define features, estimate scope, and map the plan.
					</p>
				</div>
			</div>

			<div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
				<div class="bg-gray-50 h-48 p-5 flex flex-col gap-3">
					<div class="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
						<div class="w-3 h-3 rounded-full bg-amber-400 flex-shrink-0"></div>
						<div class="h-2.5 bg-gray-200 rounded flex-1"></div>
					</div>
					<div class="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
						<div class="w-3 h-3 rounded-full bg-green-400 flex-shrink-0"></div>
						<div class="h-2.5 bg-gray-200 rounded flex-1"></div>
					</div>
					<div class="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
						<div class="w-3 h-3 rounded-full bg-blue-400 flex-shrink-0"></div>
						<div class="h-2.5 bg-gray-200 rounded flex-1"></div>
					</div>
					<div class="flex items-center gap-3 bg-white rounded-lg p-3 border border-gray-100 shadow-sm opacity-50">
						<div class="w-3 h-3 rounded-full bg-gray-300 flex-shrink-0"></div>
						<div class="h-2.5 bg-gray-200 rounded flex-1"></div>
					</div>
				</div>
				<div class="p-8">
					<h3 class="text-xl font-bold text-gray-900 mb-3">Build & Ship</h3>
					<p class="text-gray-500 leading-relaxed">
						We build in 1–6 week cycles focused on real progress. Each week delivers working software you can test or launch.
					</p>
				</div>
			</div>

			<div class="bg-white rounded-2xl border border-gray-200 overflow-hidden">
				<div class="bg-gray-50 h-48 p-5 flex flex-col gap-3">
					<div class="flex items-end gap-2 h-24 px-2">
						<div class="flex-1 bg-indigo-200 rounded-t-md" style="height: 40%"></div>
						<div class="flex-1 bg-indigo-300 rounded-t-md" style="height: 60%"></div>
						<div class="flex-1 bg-indigo-400 rounded-t-md" style="height: 75%"></div>
						<div class="flex-1 bg-indigo-500 rounded-t-md" style="height: 55%"></div>
						<div class="flex-1 bg-indigo-600 rounded-t-md" style="height: 90%"></div>
					</div>
					<div class="flex gap-2">
						<div class="flex-1 bg-white rounded-lg p-2 border border-gray-100 text-center">
							<div class="text-xs font-bold text-gray-700">98%</div>
							<div class="text-[10px] text-gray-400">uptime</div>
						</div>
						<div class="flex-1 bg-white rounded-lg p-2 border border-gray-100 text-center">
							<div class="text-xs font-bold text-gray-700">12ms</div>
							<div class="text-[10px] text-gray-400">latency</div>
						</div>
						<div class="flex-1 bg-white rounded-lg p-2 border border-gray-100 text-center">
							<div class="text-xs font-bold text-gray-700">↑24%</div>
							<div class="text-[10px] text-gray-400">growth</div>
						</div>
					</div>
				</div>
				<div class="p-8">
					<h3 class="text-xl font-bold text-gray-900 mb-3">Maintain & Optimize</h3>
					<p class="text-gray-500 leading-relaxed">
						After launch, we help you support your app. We track performance, fix bugs, and improve based on real user feedback.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
