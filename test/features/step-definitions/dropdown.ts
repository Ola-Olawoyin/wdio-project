import { Given, Then, When } from '@wdio/cucumber-framework';

Given(/^A Web page is opened that contains dropdown$/, async () => {
  await browser.url('/dropdown');
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^A user interacts with the dropdown$/, async () => {
  let ele = await $("//option[@selected='selected']");
  let val = await ele.getText();
  expect(val).toEqual('Please select an option');
  await browser.pause(7000);
});

Then(/^User is able to select an value$/, async () => {
  let dropdownEle = await $('#dropdown');
  await dropdownEle.selectByVisibleText('Option 2');
  await browser.pause(7000);

  //To get the text of all the options

  const eleArray = await $$('select > option');
  eleArray.forEach(async (element, index) => {
    const text = await element.getText();
    console.log(`Element ${index + 1} : ${text}`);
  });
});
