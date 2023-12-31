import got from "got";
import {CisacRequestModel} from "../../Models/cisac-request-model";
import {CisacResponseModel} from "../../Models/cisac-response-model";

export async function getDataPointDictionary(): Promise<CisacResponseModel> {
    const response = await got.get('https://iswcnet.cisac.org/Lookup/GetLookupData');
    return JSON.parse(response.body) as CisacResponseModel;
}

export function searchByTitleAndContributor(body: CisacRequestModel): got.GotPromise<string> {
    // todo: (BBURKE) - Remove when generated token is passed.
    const token: string = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkRCODRCMkU1QjEwNTMwMUQwMTYxNkFGMjQ1RTBDNDBFMTk3MkUwMkUiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiIyNFN5NWJFRk1CMEJZV3J5UmVERURobHk0QzQifQ.eyJuYmYiOjE3MDM5OTk0ODMsImV4cCI6MTcwNDAwMzA4MywiaXNzIjoiaHR0cHM6Ly9jaXNhY2lzd2NhcGlwcm9kLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaXN3Y2FwaSIsImNsaWVudF9pZCI6Imlzd2Nwb3J0YWwiLCJhZ2VudF9pZCI6IjEwMDAiLCJlbWFpbCI6IiIsInJvbGVzIjoiIiwiYWNjZXNzX3Njb3BlIjoic2VhcmNoIiwic2NvcGUiOlsiaXN3Y2FwaSJdfQ.qUlGw_N20EqxXhL-NAjB7TFdXbth9HToX2WfmxYwsF8G4Yl3N7URuoHQ-FS4aewJBV3AzCQLA9FS6mlD0TuTQol3D-cF2X_aQ0_Zq3gbwNcoRHE2l6V3vuRn6H7wQ8QhZoUb5itge0XyZf51bLa8XfWCpatQK3Bkbm8EAeTWctFLlQ9wlrrHUxgS7d2TigU-L5zkQLnLFQEE3PThZMbZqkKN_2xpX0Gmbx6AN3S5Mrc_691-JaBCsYeGRFSxVwVuFbETH0681I0Uvn-K76lzpglSTLibg4Xn0PukmXUe_kHMxA0eOtPDwEqRfe8h-VwZBqHcAHsMyCpSbgGzw1h2vw'

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

export function getCisacToken(): got.GotPromise<any> {
    return got.get('https://api.cashear.com:3033/services/iswcnet/cisac/token');
}