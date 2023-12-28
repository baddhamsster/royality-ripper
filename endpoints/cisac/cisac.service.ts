import got from "got";
import {CisacRequestModel} from "../../Models/cisac-request-model";
import {CisacResponseModel} from "../../Models/cisac-response-model";

function getDataPointDictionary(): got.GotPromise<any> {
    return got.get('https://iswcnet.cisac.org/Lookup/GetLookupData');
}

function searchByTitleAndContributer(body: CisacRequestModel): got.GotPromise<CisacResponseModel> {
    return got.post('https://cisaciswcprod.azure-api.net/iswc/searchByTitleAndContributor', body);
}

function getCisacToken(): got.GotPromise<any> {
    return got.get('https://api.cashear.com:3033/services/iswcnet/cisac/token');
}