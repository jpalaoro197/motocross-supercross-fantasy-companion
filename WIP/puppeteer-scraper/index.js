const puppeteer = require('puppeteer');

(async function main() {
  try {

    const browser = await puppeteer.launch({ headless: true});
    const page = await browser.newPage();

    await page.goto('http://americanmotocrosslive.com/');

  } catch (e) {
    console.log('our error', e);
  }
})();