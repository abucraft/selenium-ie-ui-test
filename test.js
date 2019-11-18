const selenium = require('selenium-webdriver')
const { until, By } = selenium
const ie = require('selenium-webdriver/ie')
const capabilities = require('selenium-webdriver/lib/capabilities')
require('iedriver')

var ieOption = (new ie.Options()).requireWindowFocus(true)
const Builder = selenium.Builder

var builder = new Builder().forBrowser(capabilities.Browser.IE).setIeOptions(ieOption)
var driver
builder.build().then(async (d) => {
    driver = d
    process.on('exit', () => {
        driver.close()
    })
    await driver.get("https://www.baidu.com")
    var input = await driver.wait(until.elementLocated(By.id('kw')))
    await input.sendKeys("test")
    var search = await driver.wait(until.elementLocated(By.id("su")))
    await search.click()
    await new Promise(resolve => setTimeout(resolve, 2000))
    await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'百度翻译')]")))
}).finally(() => {
    driver.close()
})
