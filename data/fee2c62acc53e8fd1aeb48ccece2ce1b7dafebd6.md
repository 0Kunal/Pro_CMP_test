# Test info

- Name: Consent Banner Behavior >> should accept consent and hide the banner
- Location: /home/runner/work/Pro_CMP_test/Pro_CMP_test/tests/consent-banner.spec.js:14:3

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('[id="gravitoTCFCMP-layer1-accept-all"]')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('[id="gravitoTCFCMP-layer1-accept-all"]')

    at /home/runner/work/Pro_CMP_test/Pro_CMP_test/tests/consent-banner.spec.js:16:29
```

# Page snapshot

```yaml
- banner:
  - heading "Connection timed out Error code 522" [level=1]
  - text: Visit
  - link "cloudflare.com":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_522&utm_campaign=c.digitalrights.world
  - text: for more information. 2026-07-19 05:28:52 UTC
- text: You
- heading "Browser" [level=3]
- text: Working
- link:
  - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_522&utm_campaign=c.digitalrights.world
- text: Ashburn
- heading "Cloudflare" [level=3]:
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_522&utm_campaign=c.digitalrights.world
- text: Working c.digitalrights.world
- heading "Host" [level=3]
- text: Error
- heading "What happened?" [level=2]
- paragraph: The initial connection between Cloudflare's network and the origin web server timed out. As a result, the web page can not be displayed.
- heading "What can I do?" [level=2]
- heading "If you're a visitor of this website:" [level=3]
- paragraph: Please try again in a few minutes.
- heading "If you're the owner of this website:" [level=3]
- paragraph:
  - text: Contact your hosting provider letting them know your web server is not completing requests. An Error 522 means that the request was able to connect to your web server, but that the request didn't finish. The most likely cause is that something on your server is hogging resources.
  - link "Additional troubleshooting information here.":
    - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522/
- paragraph:
  - text: "Cloudflare Ray ID:"
  - strong: a1d752c93f02d70b
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_522&utm_campaign=c.digitalrights.world
```

# Test source

```ts
   1 | const { test, expect } = require("@playwright/test");
   2 | const { appConfig } = require("../constant");
   3 |
   4 | test.describe("Consent Banner Behavior", () => {
   5 |   test.beforeEach(async ({ page }) => {
   6 |     await page.goto(appConfig.targetUrl);
   7 |   });
   8 |
   9 |   test("should display the consent banner", async ({ page }) => {
  10 |     const banner = page.locator('[id="gravitoPROCMP-tab-container-id"]');
  11 |     await expect(banner).toBeVisible();
  12 |   });
  13 |
  14 |   test("should accept consent and hide the banner", async ({ page }) => {
  15 |     const acceptBtn = page.locator('[id="gravitoTCFCMP-layer1-accept-all"]');
> 16 |     await expect(acceptBtn).toBeVisible();
     |                             ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  17 |     await acceptBtn.click();
  18 |     await expect(acceptBtn).not.toBeVisible();
  19 |   });
  20 |
  21 |   test("should change the tab when clicking on the 'Details' button", async ({
  22 |     page,
  23 |   }) => {
  24 |     const detailsBtn = page.locator(
  25 |       '[class="gravitoPROCMP-tabs-div"] > button:nth-of-type(2)'
  26 |     );
  27 |     await expect(detailsBtn).toBeVisible();
  28 |     await detailsBtn.click();
  29 |
  30 |     const detailsTab = page.locator(
  31 |       '[class="gravitoPROCMP-GCMP-layer1-container"]'
  32 |     );
  33 |     await expect(detailsTab).toBeVisible();
  34 |   });
  35 |
  36 |   // test("should check the number of purposes in the details tab is equal to 5", async ({
  37 |   //   page,
  38 |   // }) => {
  39 |   //   const detailsBtn = page.locator(
  40 |   //     '[class="gravitoPROCMP-tabs-div"] > button:nth-of-type(2)'
  41 |   //   );
  42 |   //   await detailsBtn.click();
  43 |
  44 |   //   const listContainer = page.locator(
  45 |   //     '[class="gravitoPROCMP-GCMP-consent-container"]'
  46 |   //   );
  47 |   //   await page.waitForTimeout(2000);
  48 |   //   const purposeCount = await listContainer
  49 |   //     .locator('[class="gravitoPROCMP-GCMP-accordion"]')
  50 |   //     .count();
  51 |   //   expect(purposeCount).toBe(5);
  52 |   // });
  53 |
  54 |   test("this test should always fail", async ({ page }) => {
  55 |     // this test should always fail
  56 |     expect(true).toBe(false);
  57 |   });
  58 | });
  59 |
```