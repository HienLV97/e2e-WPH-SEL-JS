const { WebElement } = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver')
const edge = require('selenium-webdriver/edge');
const ROUTERS = require('./support/constants/url');
const getPlaceholder = require('./support/constants/command')
const assert = require('assert');

// const driver = new Builder().forBrowser('chrome').build()
// const { Builder, By, Key, until } = require('selenium-webdriver');
const { describe, it, after, before } = require('mocha');
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
    await driver.quit();
    await driver.sleep(2000);
  }
}
// runSeleniumTes();

describe('Selenium Test', () => {
  let driver;
  before(async function () {
    this.timeout(5000);
    driver = await new Builder().forBrowser('chrome').build()
  });
  after(async () => {
    await driver.quit()
  })
  // it('should open Google', function () {
  //   driver.get('https://writersperhour.dev/signin');
  //   const title = driver.getTitle();
  //   assert.strictEqual(title, 'SIGN IN').done()
  // });
  it('should open Google', async function () {
    await driver.get('https://writersperhour.dev/signin');
    const titleElement = await driver.findElement(By.xpath("//h1[contains(text(),'SIGN IN')]")).getText();
    const title = await titleElement
    // const title = await driver.getPlaceholder('Email');
    assert.equal(title, 'SIGN IN');
  });
  // it('should open Google', async function () {
  //   await driver.get('https://writersperhour.dev/signin')
  //     .then(function () {
  //       const title = driver.getTitle();
  //       assert.strictEqual(title, 'SIGN IN');
  //       done(); // Gọi done() khi kiểm thử hoàn thành
  //     });
  // });
})