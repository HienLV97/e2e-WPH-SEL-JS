// const { WebElement } = require('selenium-webdriver');
// const { Builder, By, Key, until } = require('selenium-webdriver')
// const driver = new Builder().forBrowser('chrome')
// function getPlaceholder(value) {
//     return driver.findElement(By.xpath(`//input[contains(@placeholder, '${value}')]`));
//     //  return driver.findElement(By.xpath(`//input[contains(@placeholder, '${value})']`));
// }
// module.exports = getPlaceholder

const { By } = require('selenium-webdriver');

function getPlaceholder(driver, value) {
    return driver.findElement(By.xpath(`//input[contains(@placeholder, '${value}')]`));
}

module.exports = getPlaceholder;
