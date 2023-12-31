export class OtherTitlesModel {
    private _title: string | undefined;
    private _type: string | undefined;

    get title(): string | undefined {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get type(): string | undefined {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
}