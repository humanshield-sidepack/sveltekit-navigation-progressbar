<script>
	import { navigating } from '$app/state';
	import { cubicOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import { untrack } from 'svelte';
	import './NavigationProgress.css';

	/**
	 * @typedef {Object} NavigationProgressProps
	 *
	 * @property {string} [trackColor]
	 * The color of the progress bar track.
	 * Accepts any valid CSS color value (e.g. 'red', '#ff0000', 'rgb(255,0,0)',
	 * 'hsl(0, 100%, 50%)', etc.) or a predefined CSS custom property
	 * (e.g. 'var(--primary-color)').
	 * Default: 'transparent'.
	 *
	 * @property {string} [fillColor]
	 * The color of the progress bar fill.
	 * Accepts any valid CSS color value or a predefined CSS custom property.
	 * Default: 'red'.
	 */

	/**
	 * @type {NavigationProgressProps}
	 */
	const { trackColor = 'transparent', fillColor = 'red' } = $props();

	const p = new Tween(0, {
		duration: 200,
		easing: cubicOut
	});

	/**
	 * @type {ReturnType<typeof setTimeout> | null}
	 */
	let timeout = null;
	let isVisible = $state(false);
	function reset() {
		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
		p.set(0, { duration: 0 });
	}

	function increase() {
		const progressLeft = 1 - p.current;
		p.set(p.current + progressLeft * 0.04);
		if (p.current > 1) {
			p.set(1);
		}
		if (navigating.complete) {
			timeout = setTimeout(increase, 50);
		} else {
			p.set(1);
			timeout = setTimeout(() => {
				isVisible = false;
				p.set(0, { duration: 0 });
			}, 150);
		}
	}

	$effect(() => {
		if (navigating.complete) {
			untrack(() => {
				isVisible = true;
				reset();
				increase();
			});
		}
	});
</script>

{#if isVisible}
	<progress
		data-navigation-progress
		style={'--track-color: ' + trackColor + '; --fill-color: ' + fillColor}
		value={p.current}
		in:fade={{ duration: 300 }}
		out:fade={{ duration: 300 }}
	>
	</progress>
{/if}
