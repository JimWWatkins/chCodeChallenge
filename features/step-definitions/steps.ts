import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page.js';

const pages = {
    home: HomePage
}

// Preparation Steps
Given(/^I am on the following url (.+)$/, async (url:string) => {
    await HomePage.openUrl(url);
});


// Action Steps
When(/^I click on the SnatchBot chat bot$/, async () => {
    await HomePage.openBot();
});

When(/^I enter my name "(.+)"$/, async (name:string) => {
    await HomePage.sendMessageToBot(name);
    await HomePage.selectOption("Yes");
});

When(/^I choose chat option "(.+)"$/, async (option:string) => {
    await HomePage.selectOption(option);
});


// Expectation Steps
Then(/^I am welcomed by the chatbot$/, async () => {
    const welcomeText = await HomePage.getChatBotWelcomeText()
    expect(welcomeText).toContain("I'm Jamie, your friendly guide to chatbots and SnatchBot");
});

Then(/^the chat bot's response contains conversation option (.*)$/, async (option:string) => {
    const result = await HomePage.confirmOptions(option)
    expect(result).toBeTruthy();
});

Then(/^the approximate cost is "(.*)" with recurring fees of "(.*)" per month$/, async (nowCost:number, montlyCost:number) => {
    const nowCostResult = await HomePage.getNowCost();
    const monthlyCostResult = await HomePage.getMonthlyCost();
    expect(nowCostResult).toEqual(nowCost);
    expect(monthlyCostResult).toEqual(montlyCost);
});

Then(/^the chatbot lists feature "(.*)"$/, async (feature:string) => {
    const result = await HomePage.getLastChatBotMessage();
    expect(result).toEqual(feature);
});

Then(/^the chatbox explains the feature, "(.*)"$/, async (featureDescription:string) => {
    const messages = await HomePage.getAllChatBotMessages();
    expect(messages).toContain(featureDescription);
});

