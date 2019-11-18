const selenium = require('selenium-webdriver')
const ie = require('selenium-webdriver/ie')
const capabilities = require('selenium-webdriver/lib/capabilities')
require('iedriver')

var ieOption = (new ie.Options()).requireWindowFocus(true)
const Builder = selenium.Builder

var builder = new Builder().forBrowser(capabilities.Browser.IE).setIeOptions(ieOption)

builder.build().then(async (driver) => {
    await driver.get("https://www.baidu.com")
    throw "abcde"
})
