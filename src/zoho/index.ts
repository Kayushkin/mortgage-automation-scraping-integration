import { launch, Page } from 'puppeteer'
import { sels } from './sels'
import { creds } from './creds'
import { CSVAccountData } from './types'
import fs from 'fs'
import csv from 'neat-csv'

export const getAccount = async (coID: string) => {
  const results = await csv(fs.readFileSync('./accounts20200101.csv', {encoding: 'utf-8'}))
  return (await results.find((acc) => acc['Company id'] == coID)) as unknown as CSVAccountData
}






























// export const run = async()  => {
//   const browser = await launch({
//     headless: false,
//     slowMo: 10,
//   })
//   const page = await browser.newPage()
//   await page.goto('https://accounts.zoho.com/signin')

//   await login(page)//.catch(e => console.log(`login failed`))
  
//   await page.goto('https://crm.zoho.com/crm/org642006340/tab/Accounts/2375204000034976001')
//   await page.waitForSelector('#labelTD_DESCRIPTION')

//   const x = await page.evaluate((sels_: typeof sels) => {
//     let companyInfo = {}
//     Object.keys(sels_.company).forEach(k => {
//       console.log(document.querySelector(sels_.company[k]).text)
//       companyInfo[k] = document.querySelector(sels_.company[k]).text
//     }, sels)
//     return companyInfo
//   })
//   console.log(x)
//   // await browser.close()
// }

// export const login = async (page: Page) => {
//   await page.waitForSelector(sels.loginForm.usernameField)
//   await page.click(sels.loginForm.usernameField)
//   await page.keyboard.type(creds.username)
//   await page.click(sels.loginForm.submitUserButton)
//   await page.waitForSelector(sels.loginForm.submitPasswordButton)
//   await page.click(sels.loginForm.passwordField)
//   await page.keyboard.type(creds.password)
//   await page.click(sels.loginForm.submitPasswordButton)
//   await page.waitForSelector('#profile_name')
// }
