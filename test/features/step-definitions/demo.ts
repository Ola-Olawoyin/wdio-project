import { Given, Then, When } from "@wdio/cucumber-framework";
import * as chai from "chai";





Given(/^I navigate to Google webpage$/ , async () => {
    await browser.url("https://www.google.com")
    const acceptButton = await $('button=Accept all');
if (acceptButton.isDisplayed()) {
    acceptButton.click();
}
await browser.pause(5000)
})

When(/^I Search with (.*)$/, async (SearchItem) =>{
const ele = await $("[name='q']")
await ele.setValue(SearchItem)
await browser.keys("Enter")

})

Then(/^I click the first search result$/,async () =>{
 const ele = await $("//h3")
 await ele.click()
 await browser.pause(5000)
})

 Then(/^URL should match (.*)$/,async (expectedURL) =>{
const url = await browser.getUrl()
chai.expect(expectedURL).to.equal(url)
 })
