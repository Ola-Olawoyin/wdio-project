import { Given, When, Then } from '@wdio/cucumber-framework';
const chai = require('chai');
const expect = chai.expect;

Given(/^Google page is opened$/, async () => {
  await browser.url('https://www.google.com/');
  await browser.deleteCookies();
  const cookies = await browser.getCookies();
  console.log(`Cookies after deletion: ${cookies}`);
  await browser.pause(7000);
});

When(/Searched with a (.*)/, async searchedItem => {
  console.log(`>>searchedItem: ${searchedItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(searchedItem);
  await browser.keys('Enter');
});

Then(/^Click the first search result$/, async () => {
  let ele = await $(`<h3>`);
  ele.click();
});

Then(/URL should match (.*)/, async expectedURL => {
  console.log(`>> expectedURL: ${expectedURL}`);
  let url = await browser.getUrl;
  expect(url).equal(expectedURL);
});
