# sveltekit-navigation-progressbar

A simple progressbar for sveltekit to show the progress of navigation. It uses the `navigating` state from sveltekit to track the navigation progress and shows a progress bar at the top of the page.

## Installation

```sh
npm install sveltekit-navigation-progressbar
```

## Usage

```svelte
<script lang="ts">
	import { NavigationProgress } from 'sveltekit-navigation-progressbar';
</script>

<!-- accept any css color value (hex, rgb, rgba, hsl, hsla, named colors etc...) or a css variable pointing to a valid color -->
<NavigationProgress fillColor={'blue'} trackColor={'transparent'} />
```

## Styling

### Colors

- `fillColor`: The color of the progress bar. Default is `red`.
- `trackColor`: The color of the track (the background of the progress bar). Default is `transparent`.

### Css Styling

You can change everything about the progress bar by targeting the `progress[data-navigation-progress]` attribute in your css. For example:

```css
progress[data-navigation-progress] {
    top: 150px; // change the top
}
```

This gives you full control over the styling og the progress bar, expect for the colors which are controlled by the `fillColor` and `trackColor` props.

If you want to see the default styles, you can check the [NavigationProgress.css](./src/lib/NavigationProgress.css) file.

This package was created as part of this article [Improving page navigation UX in SvelteKit with a progress bar](https://rachidboudjelida.com/articles/smooth-navigation-progress-bar-sveltekit)

## License

MIT License

## Author

Rachid Boudjelida - [@rachidboudjelida](https://rachidboudjelida.com)
