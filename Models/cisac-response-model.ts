import {OtherTitlesModel} from "./other-titles-model";
import {InterestedPartiesModel} from "./interested-parties-model";
import {WorksModel} from "./works-model";

export class CisacResponseModel {
    private _iswc: string | undefined;
    private _agency: string | undefined;
    private _originalTitle: string | undefined;
    private _otherTitles: Array<OtherTitlesModel> | undefined;
    private _interestedParties: Array<InterestedPartiesModel> | undefined;
    private _works: Array<WorksModel> | undefined;
    private _linkedISWC: Array<any> | undefined;
    private _createdDate: Date | undefined;
    private _lastModifiedDate: Date | undefined;

    get iswc(): string | undefined {
        return this._iswc;
    }

    set iswc(value: string) {
        this._iswc = value;
    }

    get agency(): string | undefined {
        return this._agency;
    }

    set agency(value: string) {
        this._agency = value;
    }

    get originalTitle(): string | undefined {
        return this._originalTitle;
    }

    set originalTitle(value: string) {
        this._originalTitle = value;
    }

    get otherTitles(): Array<OtherTitlesModel> | undefined {
        return this._otherTitles;
    }

    set otherTitles(value: Array<OtherTitlesModel>) {
        this._otherTitles = value;
    }

    get interestedParties(): Array<InterestedPartiesModel> | undefined {
        return this._interestedParties;
    }

    set interestedParties(value: Array<InterestedPartiesModel>) {
        this._interestedParties = value;
    }

    get works(): Array<WorksModel> | undefined {
        return this._works;
    }

    set works(value: Array<WorksModel>) {
        this._works = value;
    }

    get linkedISWC(): Array<any> | undefined {
        return this._linkedISWC;
    }

    set linkedISWC(value: Array<any>) {
        this._linkedISWC = value;
    }

    get createdDate(): Date | undefined {
        return this._createdDate;
    }

    set createdDate(value: Date) {
        this._createdDate = value;
    }

    get lastModifiedDate(): Date | undefined {
        return this._lastModifiedDate;
    }

    set lastModifiedDate(value: Date) {
        this._lastModifiedDate = value;
    }
}