import {InterestedPartiesModel} from "./interested-parties-model";
import {AdditionalIdentifiersModel} from "./additional-identifiers-model";

export class WorksModel {
    id: number;
    iswc: string;
    iswcEligible: boolean;
    deleted: boolean;
    createdDate: Date;
    lastModifiedDate: Date;
    agency: string;
    sourcedb: number;
    workcode: string;
    category: string;
    disambiguation: boolean;
    disambiguateFrom: Array<any>;
    derivedFromIswcs: Array<any>;
    performers: Array<any>;
    instrumentation: Array<any>;
    cisnetCreatedDate: Date;
    cisnetLastModifiedDate: Date;
    additionalIdentifiers: AdditionalIdentifiersModel;
    originalTitle: string;
    otherTitles: Array<any>;
    interestedParties: Array<InterestedPartiesModel>;
}