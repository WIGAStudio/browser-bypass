function spawnSecuredBrowser(apiKey, instance) {
  console.log("This should provide the WS Endpoint");
  //Connect to the Server
  //Return the browser endpoint
}

function injectBypassMethods(page) {
  page.hardwareMouseClick = async (x, y) => {
    await page.mouse.move(x, y);
    await page.mouse.down();
  };
  page.testBrowser = async () => {
    await page.goto("https://pixelscan.net/", { waitUntil: "networkidle2" });
    const fpResult = await page.evaluate(() => {
      return document.querySelector("h1").innerText;
    });
    console.log(fpResult);
  };
}

const secureBrowser = {
  spawnSecuredBrowser,
  injectBypassMethods,
};

module.exports = secureBrowser;
