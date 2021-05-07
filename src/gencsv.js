const puppeteer = require('puppeteer');
const fs = require('fs');
const stringify = require('csv-stringify');

const scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  try {
    const page = await browser.newPage();

    await page.setViewport({ width: 1297, height: 798 });

    await page.goto('https://shopping.pchome.com.tw/', {
      waitUntil: 'networkidle2'
    });

    const searchBoxSelector = 'input[id=keyword]';

    await page.waitForSelector(searchBoxSelector);
    await page.$eval(searchBoxSelector, el => el.value = 'sony walkman');
    const searchBoxSubmitButton = 'input[id=doSearch]';

    await page.click(searchBoxSubmitButton);

    // const resultsSelector = '#ItemContainer'
    // await page.waitForSelector(resultsSelector, { visible: true });

    await page.waitForNavigation({
      waitUntil: 'networkidle2'
    });

    const pageResults = await page.evaluate(() => {
      const rows = document.querySelector('#ItemContainer').children;
      let results = [];
      for(var i=0; i<rows.length; i++) {
        const row = rows[i];
        if (row.nodeName.toLowerCase() == 'dl') {
          const name = row.querySelector('.nick').textContent;
          const price = row.querySelector('span.price > .value').textContent;
          results.push({ name, price });
        }
      }
      return results;
    });

    await browser.close();
    return pageResults;
  } catch (error) {
    console.log(error);
    browser.close();
    return null;
  }
}

const run = async () => {
  const results = await scrape();
  if (results) {
    function writeCSV(err, output) {
      const fileName = 'csvs/walkmans-' + new Date().toISOString() + '.csv';
      fs.writeFile(fileName, output, () => console.log('nah'));
    } 
    stringify(results, { header: true }, writeCSV);
    console.log('all done.');
  } else {
    console.log('no results.');
  }
}

run()
