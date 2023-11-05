const { WebElement } = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver')
const edge = require('selenium-webdriver/edge');
const getPosition = require('selenium-webdriver');
const ROUTERS = require('./support/constants/url');
const getPlaceholder = require('./support/constants/command')
const assert = require('assert');
const { describe, it, after, before } = require('mocha');
const customFunctions  = require('./support/ScreenSetup/ScreenPosition');
// const FullScreen2 = require('./support/ScreenSetup/ScreenPosition');
// const MidRight = require('./support/ScreenSetup/ScreenPosition');
async function runSeleniumTes() {
  try {
    await driver.navigate().to(ROUTERS.SIGN_IN)
    const email = getPlaceholder(driver, 'Email')
    await email.sendKeys("123")
    // var textboxPassword = driver.findElement(By.css("input[type='text'][placeholder='Email']"));
    var textboxPassword = driver.findElement(By.css("input[placeholder='Email']"));
    textboxPassword.sendKeys("1289374697812")
    await driver.sleep(2000);
  } finally {
    await driver.quit(); await driver.sleep(2000);
  }
}
describe('Selenium Test', () => {
  let driver;
  before(async function () {
    this.timeout(5000);
    driver = await new Builder().forBrowser('chrome').build()
    customFunctions.MidRight(driver)
    // MidRight(driver)
  });
  after(async () => {
    await driver.quit()
  })
  context("test A", () => {
    it('should open Google', async function () {
      await driver.get('https://writersperhour.dev/signin');
      const titleElement = await driver.findElement(By.xpath("//h1[contains(text(),'SIGN IN')]")).getText();
      const title = await titleElement
      assert.equal(title, 'SIGN IN');
    });
    it('Input value', async function () {
      await driver.get('https://writersperhour.dev/signin');
      const emailTextbox = await getPlaceholder("Email")
      emailTextbox.sendKeys("abc")
    });
  })
})