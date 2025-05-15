const { test, expect } = require("@playwright/test");
const { appConfig } = require("../constant");

test.describe("Consent Banner Behavior", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(appConfig.targetUrl);
  });

  test("should display the consent banner", async ({ page }) => {
    const banner = page.locator('[id="gravitoPROCMP-tab-container-id"]');
    await expect(banner).toBeVisible();
  });

  test("should accept consent and hide the banner", async ({ page }) => {
    const acceptBtn = page.locator('[id="gravitoLightCMP-layer1-accept-all"]');
    await expect(acceptBtn).toBeVisible();
    await acceptBtn.click();
    await expect(acceptBtn).not.toBeVisible();
  });

  test("should chnage the tab when clicking on the 'Details' button", async ({
    page,
  }) => {
    const detailsBtn = page.locator(
      '[class="gravitoPROCMP-tabs-div"] > button:nth-of-type(2)'
    );
    await expect(detailsBtn).toBeVisible();
    await detailsBtn.click();

    const detailsTab = page.locator(
      '[class="gravitoPROCMP-GCMP-layer2-container"]'
    );
    await expect(detailsTab).toBeVisible();
  });

  test("should check the number of purposes in the details tab is equal to 5", async ({
    page,
  }) => {
    const detailsBtn = page.locator(
      '[class="gravitoPROCMP-tabs-div"] > button:nth-of-type(2)'
    );
    await detailsBtn.click();

    const listContainer = page.locator(
      '[class="gravitoPROCMP-GCMP-consent-container"]'
    );
    await page.waitForTimeout(2000);
    const purposeCount = await listContainer
      .locator('[class="gravitoPROCMP-GCMP-accordion"]')
      .count();
    expect(purposeCount).toBe(5);
  });
});
