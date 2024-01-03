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

export function searchByTitleAndContributor(body: CisacRequestModel, token: string): got.GotPromise<string> {
    // todo: (BBURKE) - Remove when generated token is passed.
      let createPlaylistOptions = {
        headers: {
            'Content-type': 'application/json',
            'Authorization' : token,
            'Accept' : 'application/json'
        },
        body: JSON.stringify(body)
    }
    return got.post('https://cisaciswcprod.azure-api.net/iswc/searchByTitleAndContributor', createPlaylistOptions);
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

function lessThanTwentyNineMinutesAgo (date: any): boolean {
    const twentyNineMinutes = 29 * 60 * 1000; /* ms */
    const twentyNineMinutesAgo = Date.now() - twentyNineMinutes;
    return date > twentyNineMinutesAgo;
}
