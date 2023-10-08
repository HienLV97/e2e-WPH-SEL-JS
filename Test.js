const { WebElement } = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver');
// const { ROUTERS } = require('../support/url');
import { ROUTERS } from "../support/constants/url"
const Url = 'https://www.google.com'
const UrlWPH = "https://writersperhour.dev";
const edge = require('selenium-webdriver/edge');
const { ROUTERS } = require('../support/url');
// const ROUTERS = require('../support/url');
async function runSeleniumTest() {
  let driver = await new Builder().forBrowser('MicrosoftEdge').build();
  try {
    await driver.navigate().to(Url)
    await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);
    await driver.wait(until.titleIs('Selenium - Google Search'), 5000);
    console.log(await driver.getTitle());
  } finally {
  }
}
async function runSeleniumTes() {
  let driver = new Builder().forBrowser('MicrosoftEdge').build()
  try {
    // Mở trang web Google
    // await driver.get('https://www.google.com');
    // WebElement 
    await driver.navigate().to(ROUTERS.SIGN_IN)
    //  const email = driver.findElement(By.css("input[placeholder='Password']"))  
    // await email.sendKeys("123");
  } finally {
  }
}

// runSeleniumTest();
runSeleniumTes();
