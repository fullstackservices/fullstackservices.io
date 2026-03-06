<script lang="ts">
	type FormState = 'idle' | 'submitting' | 'success';

	let formState = $state<FormState>('idle');
	let name = $state('');
	let email = $state('');
	let timeline = $state('');
	let vision = $state('');
	let budget = $state('');

	const budgetOptions = ['Under $5K', '$5K – $15K', '$15K – $50K', '$50K+'];

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		formState = 'submitting';
		await new Promise((r) => setTimeout(r, 1000));
		formState = 'success';
	}
</script>

<section id="contact" class="py-24">
	<div class="max-w-2xl mx-auto px-6">
		<div class="mb-10">
			<p class="text-sm font-medium tracking-widest uppercase mb-4" style="color: var(--color-accent)">Contact</p>
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Thinking of building an app?</h2>
			<p class="text-gray-500 leading-relaxed">
				Tell us about your project and we'll get back to you within 24 hours.
			</p>
		</div>

		<div class="bg-white rounded-2xl p-8 border border-[#e4e4e4]">
			{#if formState === 'success'}
				<div class="flex flex-col items-center justify-center py-16 text-center">
					<div class="w-16 h-16 rounded-full flex items-center justify-center mb-6" style="background: #fff0ef">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5 13l4 4L19 7" stroke="#FF524B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-gray-900 mb-2">Message received!</h3>
					<p class="text-gray-500">We'll be in touch within 24 hours.</p>
				</div>
			{:else}
				<form onsubmit={handleSubmit} class="space-y-5">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
						<input
							id="name"
							type="text"
							bind:value={name}
							required
							placeholder="Your name"
							class="w-full px-4 py-3 rounded-xl border border-[#e4e4e4] text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
							style="--tw-ring-color: var(--color-accent)"
						/>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
						<input
							id="email"
							type="email"
							bind:value={email}
							required
							placeholder="you@example.com"
							class="w-full px-4 py-3 rounded-xl border border-[#e4e4e4] text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
							style="--tw-ring-color: var(--color-accent)"
						/>
					</div>

					<div>
						<label for="timeline" class="block text-sm font-medium text-gray-700 mb-1">Launch timeline</label>
						<select
							id="timeline"
							bind:value={timeline}
							required
							class="w-full px-4 py-3 rounded-xl border border-[#e4e4e4] text-sm focus:outline-none focus:ring-2 focus:border-transparent transition bg-white"
							style="--tw-ring-color: var(--color-accent)"
						>
							<option value="" disabled selected>Select a timeline</option>
							<option value="asap">As soon as possible</option>
							<option value="1-3months">1–3 months</option>
							<option value="3-6months">3–6 months</option>
							<option value="exploratory">Just exploring</option>
						</select>
					</div>

					<div>
						<label for="vision" class="block text-sm font-medium text-gray-700 mb-1">What are you building?</label>
						<textarea
							id="vision"
							bind:value={vision}
							required
							rows="4"
							placeholder="Describe your product idea, what problem it solves, and where you are today..."
							class="w-full px-4 py-3 rounded-xl border border-[#e4e4e4] text-sm focus:outline-none focus:ring-2 focus:border-transparent transition resize-none"
							style="--tw-ring-color: var(--color-accent)"
						></textarea>
					</div>

					<div>
						<label class="block text-sm font-medium text-gray-700 mb-3">Monthly budget</label>
						<div class="flex flex-wrap gap-2">
							{#each budgetOptions as option}
								<button
									type="button"
									onclick={() => budget = option}
									class="px-4 py-2 rounded-full border text-sm font-medium transition-all {budget === option
										? 'border-[var(--color-accent)] bg-[#fff0ef] text-[var(--color-accent)]'
										: 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'}"
								>
									{option}
								</button>
							{/each}
						</div>
					</div>

					<button
						type="submit"
						disabled={formState === 'submitting'}
						class="w-full py-4 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-70"
						style="background: var(--color-accent)"
					>
						{formState === 'submitting' ? 'Sending…' : 'Send Message →'}
					</button>
				</form>
			{/if}
		</div>
	</div>
</section>
