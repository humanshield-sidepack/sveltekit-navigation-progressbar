<script lang="ts">
	import { resolve } from '$app/paths';
	import { NavigationProgress } from '$lib';

	let { children } = $props();
</script>

<NavigationProgress fillColor="red" trackColor="transparent" />
<header>
	<h1>Sveltekit Navigation Progress</h1>
	<nav>
		<a href={resolve('/')}>Home</a>
		<a href={resolve('/services')}>Services</a>
	</nav>
</header>
{@render children()}

<style>
	/* customize the stule or position  of the progress bar here */
	:global(progress[data-navigation-progress]) {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 4px;
		border: none;
		outline: none; /* firefox has a default outline */
	}
</style>
