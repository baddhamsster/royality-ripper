import got from "got";

function getDataPointDictionary(): got.GotPromise<any> {
    return got.get('https://iswcnet.cisac.org/Lookup/GetLookupData');
}

function searchByTitleAndContributer(body: Object): got.GotPromise<any> {
    return got.post('https://cisaciswcprod.azure-api.net/iswc/searchByTitleAndContributor', body);
}

function getCisacToken(): got.GotPromise<any> {
    return got.get('https://api.cashear.com:3033/services/iswcnet/cisac/token');
}