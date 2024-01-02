import got from "got";
import {CisacRequestModel} from "../../Models/cisac-request-model";
import {CisacResponseModel} from "../../Models/cisac-response-model";
import {CisacTokenModel} from "../../Models/cisac-token-model";
import {TokenTimeModel} from "../../Models/token-time-model";

let token: TokenTimeModel | undefined = undefined;

export async function getDataPointDictionary(): Promise<CisacResponseModel> {
    const response = await got.get('https://iswcnet.cisac.org/Lookup/GetLookupData');
    return JSON.parse(response.body) as CisacResponseModel;
}

export function searchByTitleAndContributer(body: CisacRequestModel): got.GotPromise<CisacResponseModel> {
    return got.post('https://cisaciswcprod.azure-api.net/iswc/searchByTitleAndContributor', body);
}

export async function getCisacToken(): Promise<CisacTokenModel> {
    const response = await got.get('https://api.cashear.com:3033/services/iswcnet/cisac/token');
    return JSON.parse(response.body) as CisacTokenModel
}

export async function validateOrRetrieveToken(): Promise<string> {
    if (!token) {
        return getCisacToken().then(res => {
            token = {
                token: res.token,
                timeStamp: new Date(),
            } as TokenTimeModel;
            return token.token ? token.token : '';
        });
    }
    if (token && lessThanTwentyNineMinutesAgo(token?.timeStamp)) {
        return token.token ? token.token : ''
    } else if (token && !lessThanTwentyNineMinutesAgo(token.timeStamp)) {
        return getCisacToken().then(res => {
            token = {
                token: res.token,
                timeStamp: new Date(),
            } as TokenTimeModel;
            return token.token ? token.token : '';
        });
    } else {
        return ''
    }
}

export function lessThanTwentyNineMinutesAgo (date: any): boolean {
    const twentyNineMinutes = 29 * 60 * 1000; /* ms */
    const twentyNineMinutesAgo = Date.now() - twentyNineMinutes;
    return date > twentyNineMinutesAgo;
}
