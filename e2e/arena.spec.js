// @ts-check
const {test, expect} = require('@playwright/test');

const SCREENSHOT_DIR = 'e2e/screenshots';

test.describe('Coaching Arena', () => {
  test('main arena - initial state', async ({page}) => {
    await page.goto('/');

    // Wait for the page to be fully loaded
    await expect(page.locator('h1')).toContainText('The Coaching Arena');

    // Take screenshot of initial state
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/main-arena-initial.png`,
      fullPage: true,
    });
  });

  test('main arena - with qualities selected', async ({page}) => {
    await page.goto('/');

    // Wait for the page to be fully loaded
    await expect(page.locator('h1')).toContainText('The Coaching Arena');

    // Select 5 qualities
    const qualities = ['Alert', 'Compassionate', 'Creative', 'Focused', 'Kind'];
    for (const quality of qualities) {
      await page.getByRole('button', {name: quality, exact: true}).click();
    }

    // Wait for selections to be reflected
    await expect(
      page.getByRole('button', {name: 'Alert', exact: true}),
    ).toHaveAttribute('aria-pressed', 'true');

    // Take screenshot with qualities selected
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/main-arena-with-selections.png`,
      fullPage: true,
    });
  });

  test('client arena - initial state', async ({page}) => {
    await page.goto('/client');

    // Wait for the page to be fully loaded
    await expect(page.locator('h1')).toContainText('The Coaching Arena');

    // Take screenshot of client arena
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/client-arena-initial.png`,
      fullPage: true,
    });
  });

  test('client arena - with qualities selected', async ({page}) => {
    await page.goto('/client');

    // Wait for the page to be fully loaded
    await expect(page.locator('h1')).toContainText('The Coaching Arena');

    // Select 5 qualities
    const qualities = ['Grateful', 'Joyous', 'Loving', 'Open', 'Present'];
    for (const quality of qualities) {
      await page.getByRole('button', {name: quality, exact: true}).click();
    }

    // Take screenshot with qualities selected
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/client-arena-with-selections.png`,
      fullPage: true,
    });
  });

  test('reset button clears selections', async ({page}) => {
    await page.goto('/');

    // Select some qualities
    await page.getByRole('button', {name: 'Alert', exact: true}).click();
    await page
      .getByRole('button', {name: 'Compassionate', exact: true})
      .click();

    // Click reset button
    await page.getByRole('button', {name: 'Reset'}).click();

    // Verify all qualities are deselected (buttons should not have solid variant)
    // Take screenshot after reset
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/main-arena-after-reset.png`,
      fullPage: true,
    });
  });

  test('max qualities limit enforcement', async ({page}) => {
    await page.goto('/');

    // Select 5 qualities (maximum)
    const qualities = ['Alert', 'Compassionate', 'Creative', 'Focused', 'Kind'];
    for (const quality of qualities) {
      await page.getByRole('button', {name: quality, exact: true}).click();
    }

    // Verify that other buttons are disabled
    const gentleButton = page.getByRole('button', {
      name: 'Gentle',
      exact: true,
    });
    await expect(gentleButton).toBeDisabled();

    // Take screenshot showing max qualities state with disabled buttons
    await page.screenshot({
      path: `${SCREENSHOT_DIR}/main-arena-max-qualities.png`,
      fullPage: true,
    });
  });
});
