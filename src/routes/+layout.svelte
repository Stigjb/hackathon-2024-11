<script>
	import '../app.css';
	let { children } = $props();
</script>

<header class="container mx-auto px-4 max-w-screen-sm prose  h-20">
	<h1>Leftover Magic</h1>
</header>

<main class="container mx-auto px-4 max-w-screen-sm prose">
{@render children()}
</main>

<footer class="container mx-auto px-4 max-w-screen-sm prose h-20">
<hr class="mt-6">
<h3 class="mt-2">Site navigation</h3>
<nav class="flex flex-col">
<a href="/how">How to use leftovers</a>
<a href="/fridge">How to check your fridge</a>
<a href="/learn-more">Learn more about food waste</a>
<a href="/">Back to home</a>
</nav>
</footer>
