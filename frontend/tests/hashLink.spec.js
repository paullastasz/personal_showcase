
import { test, expect } from '@playwright/test';

// Languages to test
const languages = ['pl', 'en'];

// Navigation links to test
const links = ['about', 'skills', 'projects', 'contact'];

test.describe('HashLink navigation tests', () => {

  // Test navigation in each language
  for (const language of languages) {

    // Test every navigation link
    for (const link of links) {

      test(`${language.toUpperCase()} - ${link} link works`, async ({ page }) => {
        test.setTimeout(50000);

        // Open home page in selected language
        await page.goto(`http://localhost:5173/${language}/`);

        // Find link by data-testid and click it
        const linkElementHTML = page.getByTestId(`#${link}-hash-link`);

        await expect(linkElementHTML).toBeVisible();
        await linkElementHTML.click({timeout: 50000}); 

        // Check if URL contains the correct hash
        await expect(page).toHaveURL(
          `http://localhost:5173/${language}/#${link}`
        );

        // Check if target section is visible
        await expect(page.locator(`#${link}`)).toBeVisible();

      });

    }

  }

});
