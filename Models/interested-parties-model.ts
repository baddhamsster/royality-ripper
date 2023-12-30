export class InterestedPartiesModel {
    private _name: string;
    private _lastName: string;
    private _nameNumber: number;
    private _baseNumber: string;
    private _affiliation: string;
    private _role: string;
    private _legalEntityType: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get nameNumber(): number {
        return this._nameNumber;
    }

    set nameNumber(value: number) {
        this._nameNumber = value;
    }

    get baseNumber(): string {
        return this._baseNumber;
    }

    set baseNumber(value: string) {
        this._baseNumber = value;
    }

    get affiliation(): string {
        return this._affiliation;
    }

    set affiliation(value: string) {
        this._affiliation = value;
    }

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    get legalEntityType(): string {
        return this._legalEntityType;
    }

    set legalEntityType(value: string) {
        this._legalEntityType = value;
    }
}