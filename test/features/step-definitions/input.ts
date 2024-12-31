import { Given, When } from '@wdio/cucumber-framework';

Given(/^A Web page is opened$/, async () => {
  await browser.url('/inputs');
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^I perform value inputs$/, async () => {
  /*
   * 1. Input box
   * Actions:
   * 1. Type into input box
   * 2. Clear the field and type or just add value
   * 3. Click and type
   * 4 Slow Typing
   *
   */
  let num = 12345;
  let strgNum = num.toString();
  let ele = await $(`[type=number]`);

  await ele.click();
  //await ele.scrollIntoView()
  //await ele.moveTo()
  // await ele.setValue(12345);

  /*
  Handling slow typing
  */
  await browser.pause(5000);
  for (let i = 0; i < strgNum.length; i++) {
    let charStr = strgNum.charAt(i);
    await browser.pause(1000);
    await browser.keys(charStr);
  }
});
