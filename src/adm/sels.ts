import { O } from 'ts-toolbelt'

// export type Company = O.Overwrite<typeof sels.company, {
//   wholesale: boolean,
// }>

export const sels = {
  loginForm: {
    toString() { return 'body > div.loginContainer > center > form > table > tbody' },
    get usernameField() { return sels.loginForm + ' > tr:nth-child(2) > td > input' },
    get passwordField() { return sels.loginForm + ' > tr:nth-child(4) > td > input.formInput' },
    get submitButton() { return sels.loginForm + '  > tr:nth-child(7) > td > input' },
  },
  editCompany: {
    // nav: {
      save: '#Button4',
      defaultsTab: '#CompanydefaultTab > nobr',
      detailsTab: '#detailsTab > nobr',
      licsTab: '#licenseTab > nobr',
      groupsTab: '#groupsRegionsTab > nobr',
      navigationTab: '#CompanydefaultTabOLD > nobr',
      companyTab: '#companyTab > nobr',
    // },
    // company: {
      companyLegal: '#Text1',
      companyAbbr: '#Text2',
      companyDba: '#Text3',
      companyID: '#Text4',
      channelCode: '#Text5',
      phoneNumber1: '#Text11',
      phoneNumber2: '#Text12',
      email: '#Text15',
      address1: '#Table6 > tbody > tr:nth-child(1) > td:nth-child(2) > input',
      address2: '#Table6 > tbody > tr:nth-child(2) > td:nth-child(2) > input',
      zip: '#Table6 > tbody > tr:nth-child(3) > td:nth-child(2) > input',
      wholesale: '#coOriginationChannel_Wholesale',
      wholeLoanPurchase: '#coOriginationChannel_WholeLoanPurchase',
    // },
    // groups: {
      wholesaleGroup: '#Table9 > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(1) > select > option:nth-child(4)',
      aeDropdown: '#Table9 > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(1) > select > option:nth-child(4)',
    // },
    // details: {
      owner: '#coMainContactName',
    // },
    // licenses: {
      activeButton: '#nmlsActive',
      nmlsID: '#nmlsID',
    // }
  },
  user: {
    login: '#LoginName',
    firstName: '#FirstName',
    middleName: '#MiddleName',
    position: '#Title',
    email: 'EmailAddress',
    phoneNumber1: '#userTabData > table > tbody > tr:nth-child(4) > td:nth-child(4) > input:nth-child(1)',
    phoneNumber2: '#PhoneNumber',
    phoneNumberExtension: '#Extension',
    email1: '#EmailAddress',
    email2: '#EmailAddress2',
    email3: '#EmailAddress3',
    email4: '#EmailAddress4',
    address1: '#Address1',
    address2: '#Address2',
    zip: '#Zip',
    level1: '#B1',
    level2: '#B2',
    wholesaleGroup: '#groupAssignmentsTabData > table:nth-child(4) > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(1) > select > option',
    save: '#Button1',
  },
  homePage: {
    get addUserButton() { return '#navItem_addUser > span' },
  },
  lookupCompanies: {
    editFirstCompany: 'body > table:nth-child(42) > tbody > tr:nth-child(1) > td:nth-child(2) > div > table:nth-child(2) > tbody > tr > td:nth-child(1) > table:nth-child(4) > tbody > tr > td > table:nth-child(2) > tbody > tr.listText2 > td:nth-child(6) > img:nth-child(2)'
  }
}
