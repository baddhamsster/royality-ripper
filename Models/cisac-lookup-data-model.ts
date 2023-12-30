export class CisacLookupDataModel {
    private _key: string;
    private _values: Array<any>

    get key(): string {
        return this._key;
    }

    set key(value: string) {
        this._key = value;
    }

    get values(): Array<any> {
        return this._values;
    }

    set values(value: Array<any>) {
        this._values = value;
    }
}