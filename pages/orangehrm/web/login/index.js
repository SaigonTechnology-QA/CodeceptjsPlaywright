const { I } = inject();

const locator = require('./locator')

class WebLoginPage {

  async checkLaunchWeb() {
    await I.amOnWebPage();
  }

  async inputUserName(username) {
    await I.waitAndFillWebEle(locator.pageLogin.username, username);
  }

  async inputPassword(passwd) {
    await I.waitAndFillWebEle(locator.pageLogin.password, passwd);
  }

  async clickLogin() {
    await I.clickWebButton(locator.pageLogin.loginBtn);
  }

  async checkLoginSuccess() {
    await I.doNotSeeWebText(locator.constantMsg.PANEL_HEADER);
  }

}

module.exports = new WebLoginPage();
