import puppeteer from "puppeteer";
import convert from 'xml-js'


export function getBMIData(workID: number): Promise<Element> {
    return new Promise(async resolve => {
        const username = 'joshbishopstats'; // for DEV only, not for production
        const password = 'jentyn-2hitno- Qywhyb'; // for DEV only, not for production

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
            await newPage.goto(`https://applications.bmi.com/OSPORTAL/mobile/mobileCatalog/TitleDetails.aspx?titleID=${workID}&checkboxID=0`);
            newPage.content().then(async (res) => {
                const elem: Element = JSON.parse(convert.xml2json(getXML(res, 'work')));
                resolve(elem);
                await browser.close();
            });
        });
    })

}



function getXML(string: string, tag: string) {
    return string.substring(string.indexOf('<' + tag), string.indexOf('</' + tag + '>') + (tag.length + 3))
}

interface Element {
    type: string;
    name: string;
    attributes: Attr[]
}


interface Attr  {
    chkid?: string;
    title?: string;
    workid?: string;
    iswc?: string;
    datereg?: string;
    regtype?: string;
    awards?: string;
    part_name?: string;
    pwa_ind?: string;
    soc_id?: string;
    tpj_share_us?: string;
    part_cae_no?: string;
    flag?: string;
    count?: string;
    loggedin?: string;
    url?: string;
    elements?: Element[],
    xmlns?: string;
    error?: string;
}