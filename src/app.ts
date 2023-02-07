import { Builder, Browser, By, Key, until } from 'selenium-webdriver';
import dotenv from 'dotenv'

dotenv.config()

/* Sleep Command */
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

(
    async function main() {

    /* Getting the Drivers */
    let driver = await new Builder()
                        .forBrowser(Browser.EDGE)
                        .build();
    try {

        /* Browser Configs */
        await driver.get('https://www.grovesltd.co.uk/');

        /* Finding Login Button */        
        await driver.findElement(By.className('nav-link ico-login')).click()

        /* Adding Sleep Cycle for "Cookies Prompt" to be visible */
        await sleep(5000)

        /* Click on the Accept Cookie Prompt */
        await driver.findElement(By.id('gdpr-cookie-accept')).click()

        /* Add Username and Password to the Team */
        await driver.findElement(By.name('Username')).sendKeys(process.env.USERNAMEGROVES as string)
        await driver.findElement(By.name('Password')).sendKeys(process.env.PASSWORDGROVES as string)

        /* Click on the Log In Button */
        await driver.findElement(By.className("btn btn-primary btn-block homepage-btn")).click()

    } finally {
        /* After the test is complete, Please Quit */
        /* await driver.quit(); */
    }
})();