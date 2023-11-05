const { WebElement } = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver')
const edge = require('selenium-webdriver/edge');
const getPosition = require('selenium-webdriver');
// const = require()
// const ROUTERS = require('./support/constants/url');
// const ROUTERS = require('./support/constants/url');
// const getPlaceholder = require('./support/constants/command')
// const assert = require('assert');
const { describe, it, after, before } = require('mocha');
const customFunctions = require('../support/ScreenSetup/ScreenPosition');
// const { serviceLink, baseURL } = require('../support/constants/url');
const url = require('../support/constants/url');
const chai = require('chai');
const assert = chai.assert;
describe('Selenium Test', () => {
  let driver;
  before(async function () {
    this.timeout(5000);
    driver = await new Builder().forBrowser('chrome').build()
    customFunctions.MidRight(driver)
  });
  after(async () => {
    // await driver.quit()
  })
  context("test A", () => {
    it('should open Google', async function () {
      // const driver = new Builder().forBrowser('chrome').build();

      driver.get(url.baseURL + url.serviceLink[1])

      // Lấy mã nguồn HTML của trang
      const pageSource = await driver.getPageSource()

      // Đoạn văn bản bạn muốn kiểm tra
      const textToCheck = "https://writersperhour.com/ib-internal-assessment";
      // "url":"https://writersperhour.com/ib-internal-assessment
      // Kiểm tra xem pageSource có chứa textToCheck hay không
      if (pageSource.includes(textToCheck)) {
        console.log("pageSource chứa đoạn văn bản cần kiểm tra.");
      } else {
        console.log("pageSource không chứa đoạn văn bản cần kiểm tra.");
      }

      // console.log(url.serviceLink[1])
      // let urlA = url.baseURL + url.serviceLink[1]
      // driver.get(url.baseURL + url.serviceLink[1])
      // driver.sleep(5000);
      // driver.getPageSource().then(function (pageSource) {
      //   // console.log(pageSource); // In ra mã nguồn HTML
      //   // let pageSource = driver.getPageSource()
      //   assert.isTrue(pageSource.("https://write1231231234dsafsadfrsperhour.dev/media/review/avatar1.111svg"));
      //   // console.log("hihi")
      // });
      // let pageSource = await driver.getPageSource()
      // assert.isTrue(pageSource.includes("https://writersperhour.dev/media/review/avatar1.svg"));
      // console.log(url)
      // let containsURL = "url\":\"" + urlA
      // assert.isTrue(pageSource.includes("https://writersperhour.dev/media/review/avatar1.svg"));
      // for (var i = 0; i < url.serviceLink.length; i++) {
      //   let urlA = url.baseURL + url.serviceLink[i]
      //   driver.get(urlA)
      //   let pageSource = await driver.getPageSource()
      //   // console.log(url)
      //   let containsURL = "url\":\"" + urlA
      //   assert.isTrue(pageSource.includes("https://writersperhour.dev/media/review/avatar1.svg"));
      // }
      //   await driver.get('https://writersperhour.dev/signin');
      //   const titleElement = await driver.findElement(By.xpath("//h1[contains(text(),'SIGN IN')]")).getText();
      //   const title = await titleElement
      //   assert.equal(title, 'SIGN IN');
    });
  })
})