import puppeteer from "puppeteer";
import convert from 'xml-js'
import {BmiRequestDto} from "../../Models/bmi-request-dto";
import {BMIResponseDTO, convertElementToBMIResponseDTO} from "../../Models/bmi-response-dto";
import {Element_dto} from "../../Models/element-dto";


export function getBMIData(requestDTO: BmiRequestDto): Promise<BMIResponseDTO> {
    return new Promise(async resolve => {
        const username = 'joshbishopstats'; // todo: (BBURKE) for DEV only, not for production
        const password = 'jentyn-2hitno- Qywhyb'; // todo: (BBURKE) for DEV only, not for production

        const browser = await puppeteer.launch({headless: 'new'});
        const page = await browser.newPage();
        await page.goto('https://applications.bmi.com/security/Login.aspx');
        await page.waitForSelector('#txtUserName');
        await page.type('#txtUserName', username); // todo (bburke) - replace with real username
        await page.type('#txtPassword', password); // todo (bburke) - replace with real password
        await page.click('#checkBoxDisclaimer');
        await page.click('#btnLogin');
        page.cookies().then(async (cookies) => {
            const newPage = await browser.newPage();
            await newPage.setCookie(...cookies);
            await newPage.goto(`https://applications.bmi.com/OSPORTAL/mobile/mobileCatalog/TitleDetails.aspx?titleID=${requestDTO.workID}&checkboxID=0`);
            newPage.content().then(async (res) => {
                const elem: Element_dto = JSON.parse(convert.xml2json(getXML(res, 'work')));
                resolve(convertElementToBMIResponseDTO(elem));
                await browser.close();
            });
        });
    })

}



function getXML(string: string, tag: string) {
    return string.substring(string.indexOf('<' + tag), string.indexOf('</' + tag + '>') + (tag.length + 3))
}