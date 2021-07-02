export const sels = {
  loginForm: {
    get usernameField() { return '#login_id' },
    get submitUserButton() { return '#nextbtn' },
    get passwordField() { return '#password' },
    get submitPasswordButton() { return '#nextbtn' },
  },
  company: {
    name: '#value_ACCOUNTNAME',
    ae: '#value_SMOWNERID',
    status: '#subvalue_ACCOUNTCF16',
    nmls: '#value_ACCOUNTCF14',
    phone: '#value_PHONE',
    email: '#subvalue_ACCOUNTCF4',
    owner: '#value_ACCOUNTCF114',
    compensation: '#value_ACCOUNTCF20',
    companyID: '#value_ACCOUNTCF51',
    streetAddr: '#subvalue_ACCOUNTCF5',
    zip: '#value_ACCOUNTCF2',
  }
}
