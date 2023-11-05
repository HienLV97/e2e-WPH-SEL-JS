const { By } = require('selenium-webdriver');

function getPlaceholder( value) {
    let driver
    return driver.findElement(By.xpath(`//input[contains(@placeholder, '${value}')]`));
}

module.exports = getPlaceholder;
