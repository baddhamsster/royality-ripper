import {OtherTitlesModel} from "./other-titles-model";
import {InterestedPartiesModel} from "./interested-parties-model";
import {WorksModel} from "./works-model";

export class CisacResponseModel {
    iswc: string;
    agency: string;
    originalTitle: string;
    otherTitles: Array<OtherTitlesModel>;
    interestedParties: Array<InterestedPartiesModel>;
    works: Array<WorksModel>;
    linkedISWC: Array<any>;
    createdDate: Date;
    lastModifiedDate: Date;
}