export class CodeNameFamilyModel {
    private _code: string | undefined;
    private _name: string | undefined;
    private _family: string | undefined;

    get code(): string | undefined {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    get name(): string | undefined {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get family(): string | undefined {
        return this._family;
    }

    set family(value: string) {
        this._family = value;
    }
}