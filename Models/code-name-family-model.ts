export class CodeNameFamilyModel {
    private _code: string;
    private _name: string;
    private _family: string;

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get family(): string {
        return this._family;
    }

    set family(value: string) {
        this._family = value;
    }
}