const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('');

  const result = await page.evaluate(() => {
    let temperature = document.querySelector('.column-4').innerText;
    return {
      temperature,
    };
  });

  console.log(result);

  browser.close();
})();
