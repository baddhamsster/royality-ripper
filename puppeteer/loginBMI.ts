import puppeteer from "puppeteer";
import {log} from "node:util";


export async function loginBMI() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://applications.bmi.com/security/Login.aspx')
    await page.waitForSelector('#txtUserName')
    await page.type('#txtUserName', 'admin') // todo (bburke) - replace with real username
    await page.type('#txtPassword', 'password') // todo (bburke) - replace with real password
    await page.click('#checkBoxDisclaimer')
    await page.click('#btnLogin')
    page.cookies().then(res => console.log(res));
    // await browser.close();
}