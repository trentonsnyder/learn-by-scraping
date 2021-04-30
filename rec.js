const puppeteer = require('puppeteer');
const fs = require('fs');
const csvParse = require('csv-parse');
const csv = require('csv')

const scrape = async () => {
  const browser = await puppeteer.launch({ headless: false });
  try {
    const page = await browser.newPage();
    
    await page.goto('https://www.alibaba.com/product-detail/Galaxy-Print-Pajamas-Pants-Sets-Short_1600201894448.html');
    
    await page.setViewport({ width: 1297, height: 798 });
    
    await page.waitForSelector('#ladderPrice > li:first-child .pre-inquiry-price');
    
    const text = await page.evaluate(() => {
      const anchor = document.querySelector('#ladderPrice > li:first-child .pre-inquiry-price');
      return anchor.textContent;
    });

    console.log(text)
    await browser.close();
    return text
  } catch (error) {
    console.log(error)
    browser.close()
    return null
  }
}

const appendRow = (newRow) => {
  async function main()  {
    let rows = [];
    const parser = csvParse();
    fs.createReadStream('csvs/filename.csv').pipe(parser);
    for await (const row of parser) {
      rows.push(row);
    };
    return rows;
  };
  let rows = main();
  rows.push(newRow);

  csv.generate(readStream);
  rows.forEach(_row => {
    writeStream.write(_row.join(',')+ '\n', () => {})
  })
  writeStream.end()
  writeStream.on('finish', () => {
    console.log('finish write stream, moving along')
  }).on('error', (err) => {
    console.log(err)
  })
}

const price = '12.00'
const time = new Date()

const row = {
  price,
  time
}

appendRow(row)
console.log('ok bye')
