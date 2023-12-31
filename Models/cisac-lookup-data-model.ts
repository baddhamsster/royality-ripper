export class CisacLookupDataModel {
    private _key: string | undefined;
    private _values: Array<any> | undefined;

    get key(): string | undefined {
        return this._key;
    }

    set key(value: string) {
        this._key = value;
    }

    get values(): Array<any> | undefined {
        return this._values;
    }

    set values(value: Array<any>) {
        this._values = value;
    }
}