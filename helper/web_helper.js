const Helper = require('@codeceptjs/helper');

class Web extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']


  async amOnWebPage() {
    await this.helpers['Playwright'].amOnPage('/');
  }
  async clearFieldWebElement(locator, timeout = 15) {
    await this.helpers['Playwright'].waitForVisible(locator, timeout)
    await this.helpers['Playwright'].clearField(locator)
  }
  async waitAndFillWebEle(locator, value, timeout = 15) {
    await this.helpers['Playwright'].waitForVisible(locator, timeout);
    await this.helpers['Playwright'].fillField(locator, value);
  }

  async clickWebButton(locator) {
    await this.helpers['Playwright'].click(locator);
  }

  async clickWebElement(locator) {
    await this.helpers['Playwright'].waitForVisible(locator, 10)
    await this.helpers['Playwright'].click(locator);
  }

  async seeWebText(text) {
    await this.helpers['Playwright'].see(text);
  }

  async doNotSeeWebText(text) {
    await this.helpers['Playwright'].dontSee(text);
  }

  async seeWebElement(locator) {
    try {
        await this.helpers['Playwright'].seeElement(locator)
    } catch (e) {
        throw new Error(e)
    }
}

  async waitForWebElementVisible(locator, timeout = 10) {
    try {
      await this.helpers['Playwright'].waitForElement(locator, timeout)
    } catch (e) {
      throw new Error(e)
    }
    await this.helpers['Playwright'].waitForVisible(locator, timeout)
  }

  async waitForWebElementInvisible(locator, timeout = 15) {
    await this.helpers['Playwright'].waitForInvisible(locator, timeout)
  }

}

module.exports = Web;
