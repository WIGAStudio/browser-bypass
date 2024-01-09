const pupeteer = require("puppeteer");
const secureBrowser = require("./index");

//secureBrowser.spawnSecuredBrowser(key);

async function test() {
  const browser = await pupeteer.launch({ headless: false });
  const page = await browser.newPage();

  secureBrowser.injectBypassMethods(page);
  await page.testBrowser();
}
test();
