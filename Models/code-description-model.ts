export class CodeDescriptionModel {
    private _code: string | undefined;
    private _description: string | undefined;

    get code(): string | undefined {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    get description(): string | undefined {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}