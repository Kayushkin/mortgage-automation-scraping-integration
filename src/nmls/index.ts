import { launch, Browser } from 'puppeteer'
import { sels } from './sels'

export const run = async () => {
  const browser = await launch({
    headless: false,
    slowMo: 100,
  })

  await getNMLSLics(browser, '3029', 'company')

  await browser.close()
}

export const getNMLSLics = async (browser: Browser, nmlsNumber: string, type: 'company' | 'individual') => {
  const page = await browser.newPage()
  await page.goto(`https://www.nmlsconsumeraccess.org/EntityDetails.aspx/${type}/${nmlsNumber}`)
  const states = await Promise.all((await page.$$(sels.states)).map(n => n.evaluate(n => n.textContent)))
  const lics = await Promise.all((await page.$$(sels.lics)).map(n => n.evaluate(n => /.*\n *(.*)/.exec(n.textContent)[1])))

  return {states, lics}
}
