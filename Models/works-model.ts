import {InterestedPartiesModel} from "./interested-parties-model";
import {AdditionalIdentifiersModel} from "./additional-identifiers-model";

export class WorksModel {
    private _id: number;
    private _iswc: string;
    private _iswcEligible: boolean;
    private _deleted: boolean;
    private _createdDate: Date;
    private _lastModifiedDate: Date;
    private _agency: string;
    private _sourcedb: number;
    private _workcode: string;
    private _category: string;
    private _disambiguation: boolean;
    private _disambiguateFrom: Array<any>;
    private _derivedFromIswcs: Array<any>;
    private _performers: Array<any>;
    private _instrumentation: Array<any>;
    private _cisnetCreatedDate: Date;
    private _cisnetLastModifiedDate: Date;
    private _additionalIdentifiers: AdditionalIdentifiersModel;
    private _originalTitle: string;
    private _otherTitles: Array<any>;
    private _interestedParties: Array<InterestedPartiesModel>;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get iswc(): string {
        return this._iswc;
    }

    set iswc(value: string) {
        this._iswc = value;
    }

    get iswcEligible(): boolean {
        return this._iswcEligible;
    }

    set iswcEligible(value: boolean) {
        this._iswcEligible = value;
    }

    get deleted(): boolean {
        return this._deleted;
    }

    set deleted(value: boolean) {
        this._deleted = value;
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

    get agency(): string {
        return this._agency;
    }

    set agency(value: string) {
        this._agency = value;
    }

    get sourcedb(): number {
        return this._sourcedb;
    }

    set sourcedb(value: number) {
        this._sourcedb = value;
    }

    get workcode(): string {
        return this._workcode;
    }

    set workcode(value: string) {
        this._workcode = value;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }

    get disambiguation(): boolean {
        return this._disambiguation;
    }

    set disambiguation(value: boolean) {
        this._disambiguation = value;
    }

    get disambiguateFrom(): Array<any> {
        return this._disambiguateFrom;
    }

    set disambiguateFrom(value: Array<any>) {
        this._disambiguateFrom = value;
    }

    get derivedFromIswcs(): Array<any> {
        return this._derivedFromIswcs;
    }

    set derivedFromIswcs(value: Array<any>) {
        this._derivedFromIswcs = value;
    }

    get performers(): Array<any> {
        return this._performers;
    }

    set performers(value: Array<any>) {
        this._performers = value;
    }

    get instrumentation(): Array<any> {
        return this._instrumentation;
    }

    set instrumentation(value: Array<any>) {
        this._instrumentation = value;
    }

    get cisnetCreatedDate(): Date {
        return this._cisnetCreatedDate;
    }

    set cisnetCreatedDate(value: Date) {
        this._cisnetCreatedDate = value;
    }

    get cisnetLastModifiedDate(): Date {
        return this._cisnetLastModifiedDate;
    }

    set cisnetLastModifiedDate(value: Date) {
        this._cisnetLastModifiedDate = value;
    }

    get additionalIdentifiers(): AdditionalIdentifiersModel {
        return this._additionalIdentifiers;
    }

    set additionalIdentifiers(value: AdditionalIdentifiersModel) {
        this._additionalIdentifiers = value;
    }

    get originalTitle(): string {
        return this._originalTitle;
    }

    set originalTitle(value: string) {
        this._originalTitle = value;
    }

    get otherTitles(): Array<any> {
        return this._otherTitles;
    }

    set otherTitles(value: Array<any>) {
        this._otherTitles = value;
    }

    get interestedParties(): Array<InterestedPartiesModel> {
        return this._interestedParties;
    }

    set interestedParties(value: Array<InterestedPartiesModel>) {
        this._interestedParties = value;
    }
}