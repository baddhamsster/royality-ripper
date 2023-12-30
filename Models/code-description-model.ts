export class CodeDescriptionModel {
    private _code: string;
    private _description: string;

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}