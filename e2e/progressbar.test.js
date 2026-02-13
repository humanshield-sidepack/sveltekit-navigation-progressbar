import { expect, test } from '@playwright/test';

test('home page has expected h2', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h2')).toHaveText('Home');
});

test('navigating to the service page should show the progress bar', async ({ page }) => {
	await page.goto('/');

	const progress = page.locator('progress[data-navigation-progress]');

	// Trigger navigation like a real user
	const navPromise = page.click('a[href="/services"]');

	// It should appear
	await expect(progress).toBeVisible();

	// Wait for navigation to complete
	await navPromise;
	await page.waitForURL('**/services');

	// It should eventually disappear
	await expect(progress).toHaveCount(0);

	// expect progress to be not visible
	await expect(progress).toBeHidden();
});
