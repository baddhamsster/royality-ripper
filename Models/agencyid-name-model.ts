export class AgencyidNameModel {
    private _agencyId: string | undefined;
    private _name: string | undefined;

    get agencyId(): string | undefined {
        return this._agencyId;
    }

    set agencyId(value: string) {
        this._agencyId = value;
    }

    get name(): string | undefined {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}