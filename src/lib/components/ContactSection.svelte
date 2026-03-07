<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import intlTelInput from 'intl-tel-input';
	import 'intl-tel-input/styles';
	import Icon from '@iconify/svelte';

	type FormState = 'idle' | 'submitting' | 'success';

	let formState = $state<FormState>('idle');
	let name = $state('');
	let email = $state('');
	let timeline = $state('');
	let vision = $state('');
	let budget = $state('');
	let timelineOpen = $state(false);

	let phoneEl = $state<HTMLInputElement | null>(null);
	let iti: ReturnType<typeof intlTelInput>;

	const budgetOptions = ['Under $5K', '$5K – $15K', '$15K – $50K', '$50K+', 'Speed over cash flow'];

	const timelineOptions = [
		{ value: 'asap',        label: 'Start Immediately', icon: 'mingcute:rocket-line' },
		{ value: '1-3months',   label: '1–3 months',        icon: 'mingcute:time-line' },
		{ value: '3-6months',   label: '3–6 months',        icon: 'mingcute:calendar-line' },
		{ value: 'exploratory', label: 'Just Exploring',    icon: 'mingcute:compass-discover-line' },
	];

	const selectedTimeline = $derived(timelineOptions.find(o => o.value === timeline));

	onMount(() => {
		iti = intlTelInput(phoneEl!, {
			loadUtils: () => import('intl-tel-input/utils'),
			initialCountry: 'us',
			strictMode: true,
		});

		const closeOnOutsideClick = (e: MouseEvent) => {
			if (timelineOpen && !(e.target as Element)?.closest('.timeline-dropdown')) {
				timelineOpen = false;
			}
		};
		window.addEventListener('click', closeOnOutsideClick);
		return () => window.removeEventListener('click', closeOnOutsideClick);
	});

	onDestroy(() => iti?.destroy());

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		formState = 'submitting';
		await new Promise((r) => setTimeout(r, 1000));
		formState = 'success';
	}
</script>

<section id="contact" class="py-24 bg-white">
	<div class="max-w-2xl mx-auto px-6">
		<div class="mb-10 text-center">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Thinking of building an app?</h2>
			<p class="text-gray-500 leading-relaxed">
				Tell us about your project and we'll get back to you within 24 hours.
			</p>
		</div>

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
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
						<input
							id="phone"
							bind:this={phoneEl}
							type="tel"
							placeholder="+1 (555) 000-0000"
							class="w-full py-3 rounded-xl border border-[#e4e4e4] text-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
							style="--tw-ring-color: var(--color-accent)"
						/>
					</div>
					<div>
						<label for="timeline-btn" class="block text-sm font-medium text-gray-700 mb-1">Launch timeline</label>
						<div class="dropdown w-full timeline-dropdown relative" class:dropdown-open={timelineOpen}>
							<button
								id="timeline-btn"
								type="button"
								class="w-full px-4 py-3 rounded-xl border border-[#e4e4e4] text-sm text-left flex items-center justify-between bg-white"
								onclick={() => timelineOpen = !timelineOpen}
							>
								{#if selectedTimeline}
									<span class="flex items-center gap-2">
										<Icon icon={selectedTimeline.icon} class="w-4 h-4" />
										{selectedTimeline.label}
									</span>
								{:else}
									<span class="text-gray-400">Select a timeline</span>
								{/if}
								<Icon icon="mingcute:down-line" class="w-4 h-4 text-gray-400" />
							</button>
							{#if timelineOpen}
								<ul class="absolute top-full left-0 w-full bg-white rounded-xl border border-[#e4e4e4] z-10 p-1 shadow-md mt-1">
									{#each timelineOptions as option (option.value)}
										<li>
											<button
												type="button"
												class="flex items-center gap-2 text-sm w-full px-3 py-2 rounded-lg transition-colors {timeline === option.value ? 'bg-[#fff0ef] text-[var(--color-accent)]' : 'hover:bg-gray-50'}"
												onclick={() => { timeline = option.value; timelineOpen = false; }}
											>
												<Icon icon={option.icon} class="w-4 h-4" />
												{option.label}
											</button>
										</li>
									{/each}
								</ul>
							{/if}
						</div>
					</div>
				</div>

				<div>
					<label for="vision" class="block text-sm font-medium text-gray-700 mb-1">Share your vision of the app</label>
					<textarea
						id="vision"
						bind:value={vision}
						required
						rows="5"
						placeholder="Describe your product idea, what problem it solves, and where you are today..."
						class="w-full px-4 py-3 rounded-xl border border-[#e4e4e4] text-sm focus:outline-none focus:ring-2 focus:border-transparent transition resize-none"
						style="--tw-ring-color: var(--color-accent)"
					></textarea>
				</div>

				<div>
					<p class="text-sm font-medium text-gray-700 mb-3">What's your monthly building budget?</p>
					<div class="flex flex-wrap gap-2">
						{#each budgetOptions as option (option)}
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
					style="background: var(--color-accent); background-image: linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0)); box-shadow: inset 0 0 0 1px rgba(0,0,0,0.2);"
				>
					{formState === 'submitting' ? 'Sending…' : 'Send Message →'}
				</button>
			</form>
		{/if}
	</div>
</section>

<style>
	:global(.iti) {
		width: 100%;
	}

	:global(.iti__tel-input) {
		width: 100%;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		padding-right: 1rem;
		border-radius: 0.75rem;
		border: 1px solid #e4e4e4;
		font-size: 0.875rem;
		outline: none;
		transition: all 0.15s;
	}

	:global(.iti__tel-input:focus) {
		ring: 2px;
		border-color: transparent;
	}
</style>
