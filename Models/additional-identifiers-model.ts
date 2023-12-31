export class AdditionalIdentifiersModel {
    private _isrcs: Array<any> | undefined;
    private _publisherIdentifiers: any;
    private _agencyWorkCodes: Array<any> | undefined;

    get isrcs(): Array<any> | undefined {
        return this._isrcs;
    }

    set isrcs(value: Array<any>) {
        this._isrcs = value;
    }

    get publisherIdentifiers(): any {
        return this._publisherIdentifiers;
    }

    set publisherIdentifiers(value: any) {
        this._publisherIdentifiers = value;
    }

    get agencyWorkCodes(): Array<any> | undefined {
        return this._agencyWorkCodes;
    }

    set agencyWorkCodes(value: Array<any>) {
        this._agencyWorkCodes = value;
    }
}