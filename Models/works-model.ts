import {InterestedPartiesModel} from "./interested-parties-model";
import {AdditionalIdentifiersModel} from "./additional-identifiers-model";

export class WorksModel {
    private _id: number | undefined;
    private _iswc: string | undefined;
    private _iswcEligible: boolean | undefined;
    private _deleted: boolean | undefined;
    private _createdDate: Date | undefined;
    private _lastModifiedDate: Date | undefined;
    private _agency: string | undefined;
    private _sourcedb: number | undefined;
    private _workcode: string | undefined;
    private _category: string | undefined;
    private _disambiguation: boolean | undefined;
    private _disambiguateFrom: Array<any> | undefined;
    private _derivedFromIswcs: Array<any> | undefined;
    private _performers: Array<any> | undefined;
    private _instrumentation: Array<any> | undefined;
    private _cisnetCreatedDate: Date | undefined;
    private _cisnetLastModifiedDate: Date | undefined;
    private _additionalIdentifiers: AdditionalIdentifiersModel | undefined;
    private _originalTitle: string | undefined;
    private _otherTitles: Array<any> | undefined;
    private _interestedParties: Array<InterestedPartiesModel> | undefined;

    get id(): number | undefined {
        return this._id;
    }

    set id(value: number | undefined) {
        this._id = value;
    }

    get iswc(): string | undefined {
        return this._iswc;
    }

    set iswc(value: string | undefined) {
        this._iswc = value;
    }

    get iswcEligible(): boolean | undefined {
        return this._iswcEligible;
    }

    set iswcEligible(value: boolean | undefined) {
        this._iswcEligible = value;
    }

    get deleted(): boolean | undefined {
        return this._deleted;
    }

    set deleted(value: boolean | undefined) {
        this._deleted = value;
    }

    get createdDate(): Date | undefined {
        return this._createdDate;
    }

    set createdDate(value: Date | undefined) {
        this._createdDate = value;
    }

    get lastModifiedDate(): Date | undefined {
        return this._lastModifiedDate;
    }

    set lastModifiedDate(value: Date | undefined) {
        this._lastModifiedDate = value;
    }

    get agency(): string | undefined {
        return this._agency;
    }

    set agency(value: string | undefined) {
        this._agency = value;
    }

    get sourcedb(): number | undefined {
        return this._sourcedb;
    }

    set sourcedb(value: number | undefined) {
        this._sourcedb = value;
    }

    get workcode(): string | undefined {
        return this._workcode;
    }

    set workcode(value: string | undefined) {
        this._workcode = value;
    }

    get category(): string | undefined {
        return this._category;
    }

    set category(value: string | undefined) {
        this._category = value;
    }

    get disambiguation(): boolean | undefined {
        return this._disambiguation;
    }

    set disambiguation(value: boolean | undefined) {
        this._disambiguation = value;
    }

    get disambiguateFrom(): Array<any> | undefined {
        return this._disambiguateFrom;
    }

    set disambiguateFrom(value: Array<any> | undefined) {
        this._disambiguateFrom = value;
    }

    get derivedFromIswcs(): Array<any> | undefined {
        return this._derivedFromIswcs;
    }

    set derivedFromIswcs(value: Array<any> | undefined) {
        this._derivedFromIswcs = value;
    }

    get performers(): Array<any> | undefined {
        return this._performers;
    }

    set performers(value: Array<any> | undefined) {
        this._performers = value;
    }

    get instrumentation(): Array<any> | undefined {
        return this._instrumentation;
    }

    set instrumentation(value: Array<any> | undefined) {
        this._instrumentation = value;
    }

    get cisnetCreatedDate(): Date | undefined {
        return this._cisnetCreatedDate;
    }

    set cisnetCreatedDate(value: Date | undefined) {
        this._cisnetCreatedDate = value;
    }

    get cisnetLastModifiedDate(): Date | undefined {
        return this._cisnetLastModifiedDate;
    }

    set cisnetLastModifiedDate(value: Date | undefined) {
        this._cisnetLastModifiedDate = value;
    }

    get additionalIdentifiers(): AdditionalIdentifiersModel | undefined {
        return this._additionalIdentifiers;
    }

    set additionalIdentifiers(value: AdditionalIdentifiersModel | undefined) {
        this._additionalIdentifiers = value;
    }

    get originalTitle(): string | undefined {
        return this._originalTitle;
    }

    set originalTitle(value: string | undefined) {
        this._originalTitle = value;
    }

    get otherTitles(): Array<any> | undefined {
        return this._otherTitles;
    }

    set otherTitles(value: Array<any> | undefined) {
        this._otherTitles = value;
    }

    get interestedParties(): Array<InterestedPartiesModel> | undefined {
        return this._interestedParties;
    }

    set interestedParties(value: Array<InterestedPartiesModel> | undefined) {
        this._interestedParties = value;
    }

  }