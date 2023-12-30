import {OtherTitlesModel} from "./other-titles-model";
import {InterestedPartiesModel} from "./interested-parties-model";
import {WorksModel} from "./works-model";

export class CisacResponseModel {
    private _iswc: string;
    private _agency: string;
    private _originalTitle: string;
    private _otherTitles: Array<OtherTitlesModel>;
    private _interestedParties: Array<InterestedPartiesModel>;
    private _works: Array<WorksModel>;
    private _linkedISWC: Array<any>;
    private _createdDate: Date;
    private _lastModifiedDate: Date;

    get iswc(): string {
        return this._iswc;
    }

    set iswc(value: string) {
        this._iswc = value;
    }

    get agency(): string {
        return this._agency;
    }

    set agency(value: string) {
        this._agency = value;
    }

    get originalTitle(): string {
        return this._originalTitle;
    }

    set originalTitle(value: string) {
        this._originalTitle = value;
    }

    get otherTitles(): Array<OtherTitlesModel> {
        return this._otherTitles;
    }

    set otherTitles(value: Array<OtherTitlesModel>) {
        this._otherTitles = value;
    }

    get interestedParties(): Array<InterestedPartiesModel> {
        return this._interestedParties;
    }

    set interestedParties(value: Array<InterestedPartiesModel>) {
        this._interestedParties = value;
    }

    get works(): Array<WorksModel> {
        return this._works;
    }

    set works(value: Array<WorksModel>) {
        this._works = value;
    }

    get linkedISWC(): Array<any> {
        return this._linkedISWC;
    }

    set linkedISWC(value: Array<any>) {
        this._linkedISWC = value;
    }

    get createdDate(): Date {
        return this._createdDate;
    }

    set createdDate(value: Date) {
        this._createdDate = value;
    }

    get lastModifiedDate(): Date {
        return this._lastModifiedDate;
    }

    set lastModifiedDate(value: Date) {
        this._lastModifiedDate = value;
    }
}