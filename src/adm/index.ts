import { launch, Page } from 'puppeteer'
import { getNMLSLics } from '../nmls'
import { sels } from './sels'
import { creds } from './creds'



export const login = async (page: Page) => {
  await page.click(sels.loginForm.usernameField)
  await page.keyboard.type(creds.username)
  await page.click(sels.loginForm.passwordField)
  await page.keyboard.type(creds.password)
  await page.click(sels.loginForm.submitButton)
}



// const addUser = async (page: Page, data: typeof sels.user) => {
//   await page.click(sels.homePage.addUserButton)
//   for (const [k, v] of Object.entries(data)) {
//     await page.click(sels.user[k])
//     await page.keyboard.type(v)
//   }
// }

// const editCompany = async (page: Page, corrID: string) => {
//   await waitForAndClickSelector(page, '#navItem_lookupResults_ClientCompany > span')
//   await waitForAndClickSelector(page, '#brokerCorrDiv > input')
//   await page.keyboard.type(corrID)

//   const numericID = await (await page.$(sels.lookupCompanies.editFirstCompany)).evaluate(n => /onclick="editItem\('(\d+)'/.exec(n.outerHTML)[1])
//   await page.goto(`https://adm.admortgage.com/admin/editCompany.asp?id=${numericID}&popup=false`)

//   await page.evaluate(() => {
//     for (const k of Object.keys(coInfo)) {
      
//     }
//   })

// const coInfo = {
//   companyLegal: 'TestCompanyVVK',
//   companyAbbr: 'testAbbr',
//   companyDba: 'testDba',
//   channelCode: 'dg',
//   phoneNumber1: '777',
//   phoneNumber2: '1234234',
//   email: 'testemail@testing.com',
//   address1: 'testaddr1',
//   address2: 'testaddr2',
//   zip: '33076',
//   // miniCorr: false,
//   // aeDropdown: 'Victoria AccountExecutive',
//   owner: 'Test Owner'
// }

// const structureCompanyData = (data: typeof coInfo): Exclude<typeof sels.editCompany, typeof sels.editCompany.nav> => {
//   const {companyLegal, companyAbbr, companyDba, companyID, channelCode, phoneNumber1, phoneNumber2, email, address1, address2, zip, miniCorr, aeDropdown, owner } = data
//   return {
//     company: {
//       companyLegal, companyAbbr, companyDba, companyID, channelCode, phoneNumber1, phoneNumber2, email, address1, address2, zip, miniCorr
//     },
//     details: {
//       aeDropdown, owner
//     },
//     licenses: {
      
//     }
//   }
// }


  // for (const k of Object.keys(coInfo)) {
  //   let v: string = coInfo[k]
  //   await page.click(sels.company[k]).catch(e => console.log(`can't find selector ${sels.company[k]} with key ${k}`))
  //   await ctrlA(page)
  //   await page.keyboard.type(v).catch(e => {})

  //   // switch(k) {
  //   //   //case 'miniCorr': {
  //   //   //  if (v){
  //   //   //    page.click(sels.company.wholeLoanPurchase)
  //   //   //  } else (
  //   //   //    page.click(sels.company.wholesale)
  //   //   //  )
  //   //   //} break
  //   //   //case 'aeDropdown': {
  //   //   //} break
  //   //   default: {
  //   //     await page.keyboard.type(v as string)
  //   //   }
  //   // }
  // }
  //}

export const run = async() => {
  const browser = await launch({
    headless: false,
    slowMo: 10,
  })
  const page = await browser.newPage()
  await page.goto('https://adm.admortgage.com/defaultframe.ashx')

  await login(page).catch(e => console.log(`login failed`))

  // await editCompany(page, 'test').catch(e => console.log(`createInfo failed`))

  // await browser.close()
}
