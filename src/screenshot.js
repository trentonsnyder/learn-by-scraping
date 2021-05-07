const puppeteer = require('puppeteer');

const snappy = async () => {
  const browser = await puppeteer.launch({ headless: false });
  try {
    const page = await browser.newPage();
    await page.goto('https://www.spacejam.com/1996', {
      waitUntil: 'networkidle2'
    });
    const time = new Date().toISOString();
    await page.screenshot({
      fullPage: true,
      path: 'screenshots/new-image-' + time + '.png'
    });
    console.log('screenshot taken');
    await page.close();
    await browser.close();
  } catch (error) {
    console.log(error);
    await browser.close();
  }
}

snappy();
