const puppeteer = require('puppeteer')
const mocha = require('mocha')
const { timeout } = require('puppeteer')

describe('Puppeteer demo', () => {
  let browser
  let page

  let browserOptions = {
    headless: false, // Set to true to run in headless mode and see the browser
    timeout: 15000,
  }

  let viewportOptions = {
    width: 1280,
    height: 720,
  }

  it('First test', async () => {
    browser = await puppeteer.launch(browserOptions) // Launch the browser
    page = await browser.newPage() // Open a new page
    await page.setViewport(viewportOptions) // Set the viewport size

    console.log(await browser.version())

    await browser.close() // Close the browser
  })
})
