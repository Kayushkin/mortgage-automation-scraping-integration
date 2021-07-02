import { Page } from 'puppeteer'

export const waitForAndClickSelector = async (page: Page, selector: string) => {
  await page.waitForSelector(selector).catch(x => {throw(x)})
  await page.click(selector).catch(x => {throw(x)})
}

export const ctrlA = async (page: Page) => {
  await page.keyboard.down('ControlLeft')
  await page.keyboard.press('KeyA')
  await page.keyboard.up('ControlLeft')
}