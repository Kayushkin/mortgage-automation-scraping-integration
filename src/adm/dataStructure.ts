import { Page } from 'puppeteer'
import  { CSVAccountData } from '../zoho/types'
import { getAccount } from '../zoho'
import { coID } from '../index'

const processTextField = (sel, val) => document.querySelector(sel).value = val

// Object.entries(____.textField).forEach(const [sel, val] => {
//   processTextField(sel, val)
// })
// Do the above for the other element types, with their own process______ functions

export const structureCompanyData = async () => {
  const coInfo = {}
  const csvData = await getAccount(coID)

  return {
    textField: {
      '#Text1': csvData['Account Name'].replace(' - Investment Only - ', '[Investment Only]'), // companyLegal
      '#Text2': csvData['Account Name'].substring(0, 10), // companyAbbr
      // '#Text3': , // companyDba // TODO NMLS
      '#Text4': csvData['Company id'], // companyID
      '#Text5': csvData['Account Name'].includes("Mini-Corr") ? 'C' : 'W',  // channelCode
      '#Text11': csvData['Phone'].replace(/[\(\)\- ]/g,'').substring(0,3), // phoneNumber1
      '#Text12': csvData['Phone'].replace(/[\(\)\- ]/g,'').substring(3,10), // phoneNumber2
      '#Text15': csvData['Email'], // email
      '#Table6 > tbody > tr:nth-child(1) > td:nth-child(2) > input': csvData['Street'], // address1
      '#Table6 > tbody > tr:nth-child(2) > td:nth-child(2) > input': 35 > csvData['Street'].length ? csvData['Street'].substring(35) : '', // address2
      '#Table6 > tbody > tr:nth-child(3) > td:nth-child(2) > input': csvData['Zip Code'], // zip
      '#nmlsID': csvData['NMLS'], // nmlsID
      '#coMainContactName': csvData['Owner'], // owner
    },
    checkbox: {
      '#coOriginationChannel_Wholesale': csvData['Account Name'].includes("Mini-Corr") ? false : true, // wholesale
      '#coOriginationChannel_WholeLoanPurchase': csvData['Account Name'].includes("Mini-Corr") ? true : false, // wholeLoanPurchase
    },
    dropdown: {
      '#Table9 > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(1) > select > option:nth-child(4)': ["Clint Peters", "Scott Tripp", "Brady Sweet"].includes(csvData['Account Owner']) ? (csvData['Account Owner']+' AE') : csvData['Account Owner'], // aeDropdown
    },
  }
}