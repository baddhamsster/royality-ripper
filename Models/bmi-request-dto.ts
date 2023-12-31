export class BmiRequestDto {
    private _workID: number | undefined;

    get workID(): number | undefined {
        return this._workID;
    }

    set workID(value: number | undefined) {
        this._workID = value;
    }
}