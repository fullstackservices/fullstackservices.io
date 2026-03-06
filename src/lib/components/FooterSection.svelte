<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="py-16 text-gray-600" style="background: #F2F2F2">
	<div class="max-w-6xl mx-auto px-6">
		<div class="grid md:grid-cols-3 gap-12 mb-12">
			<div class="md:col-span-2">
				<p class="text-gray-900 font-semibold text-base mb-3" style="font-family: var(--font-body)">Full Stack Services</p>
				<p class="text-sm leading-relaxed max-w-sm">
					Engineering for founders. Turning product ideas into production-ready software — fast.
				</p>
			</div>
			<div>
				<p class="text-gray-900 text-sm font-medium mb-4">Links</p>
				<ul class="space-y-2 text-sm">
					<li><a href="#about" class="hover:text-gray-900 transition-colors">About</a></li>
					<li><a href="#work" class="hover:text-gray-900 transition-colors">Work</a></li>
					<li><a href="#contact" class="hover:text-gray-900 transition-colors">Contact</a></li>
				</ul>
			</div>
		</div>
		<p class="text-sm mt-8">© {currentYear} Full Stack Services. All rights reserved.</p>
	</div>
</footer>
