export class OtherTitlesModel {
    private _title: string;
    private _type: string;

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
}