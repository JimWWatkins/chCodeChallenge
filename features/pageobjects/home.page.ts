import Page from './page.js';
import { Key } from 'webdriverio'

class HomePage extends Page {
    // Locators
    public get openBotButton () { return $('#sntch_button');
    }

    public get chatBotMessageBody() {return $('.message__body')
    }

    public get chatBotMessageBodys() {return $$('.message__body')
    }

    public get chatBotIFrame() {return $('#sntch_iframe')
    }

    public get chatBotTextField() {return $('input#chat_input')
    }

    public get confirmNameButton() {return $('/html/body/app-root/ng-component/div/div[2]/perfect-scrollbar/div/div[1]/div/div[4]/div[2]/div[4]/div/button[1]')
    }

    public get snatchBotOptions() {return $$('.message__suggested-btn')
    }


    // Methods
    public async openBot() {
        // Pause and refresh due to Global Websocket remaining open between tests
        await browser.pause(2000);
        await browser.refresh();
        await this.openBotButton.waitForClickable({ timeout: 10000, interval: 500, timeoutMsg:'Option not clickable by 10s' });
        await this.openBotButton.click();
        browser.switchToFrame(await this.chatBotIFrame);
    }

    public async getChatBotWelcomeText() {
        await this.chatBotMessageBody.waitForDisplayed({ timeout: 10000 });
        const welcomeText = await this.chatBotMessageBody.getText();
        return welcomeText;
    }

    public async sendMessageToBot(message:string) {
        await this.chatBotTextField.waitForEnabled({ timeout: 15000 });
        const textField = await this.chatBotTextField;
        await textField.click();
        await textField.setValue(message);
        await browser.keys(Key.Enter);
    }

    public async getLastChatBotMessage() {
        await $('.message__suggested-btn').waitForClickable({ timeout: 10000, interval: 500, timeoutMsg:'Option not clickable by 10s' });
        const messages = await this.chatBotMessageBodys;
        const message = await messages[messages.length-1];
        const messageText = await message.getText();
        return messageText;
    }

    public async getAllChatBotMessages() {
        await $('.message__suggested-btn').waitForClickable({ timeout: 10000, interval: 500, timeoutMsg:'Option not clickable by 10s' });
        const messages = await this.chatBotMessageBodys;
        let result = "Messages:";        
        for(let i=0; i<messages.length; i++){
            result += " " + await messages[i].getText();
        }
        return result;
    }

    public async getNowCost() {
        const messageText = await this.getLastChatBotMessage()
        const totalCost = await messageText.split(" ")[15].split(".")[0];
        return totalCost;
    }

    public async getMonthlyCost() {
        await this.selectOption("Recurring fees?");
        const messageText = await this.getLastChatBotMessage()
        const monthlyCost = await messageText.split(" ")[16];
        return monthlyCost;
    }

    public async confirmOptions(option:string) {
        // Pause used for stability of test as element is located before all similar elements are scrolled into view
        await browser.pause(2500)
        await $('.message__suggested-btn').waitForClickable({ timeout: 10000, timeoutMsg:'Option not clickable by 10s' });
        const options = await this.snatchBotOptions;
        let result = false;
        for(let i=0; i<options.length; i++){
            if(await options[i].getText() === option){
                result = true;
            }
        }
        return result;
    }

    public async selectOption(option:string) {
        // Pause used for stability of test as element is located before all similar elements are scrolled into view
        await browser.pause(2000)
        await $('.message__suggested-btn').waitForClickable({ timeout: 10000, timeoutMsg:'Option not clickable by 10s' });
        const options = await this.snatchBotOptions;
        const length = await options.length
        for(let i=0; i<length; i++){
            if(await options[i].getText() === option){
                await options[i].scrollIntoView({ block: 'center', inline: 'center' })
                await options[i].click()
            }
        }
    }
}

export default new HomePage();