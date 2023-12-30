export class AgencyidNameModel {
    private _agencyId: string;
    private _name: string;

    get agencyId(): string {
        return this._agencyId;
    }

    set agencyId(value: string) {
        this._agencyId = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}