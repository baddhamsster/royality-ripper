export class InterestedPartiesModel {
    private _name: string | undefined;
    private _lastName: string | undefined;
    private _nameNumber: number | undefined;
    private _baseNumber: string | undefined;
    private _affiliation: string | undefined;
    private _role: string | undefined;
    private _legalEntityType: string | undefined;

    get name(): string  | undefined{
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get lastName(): string  | undefined{
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get nameNumber(): number | undefined {
        return this._nameNumber;
    }

    set nameNumber(value: number) {
        this._nameNumber = value;
    }

    get baseNumber(): string | undefined{
        return this._baseNumber;
    }

    set baseNumber(value: string) {
        this._baseNumber = value;
    }

    get affiliation(): string  | undefined{
        return this._affiliation;
    }

    set affiliation(value: string) {
        this._affiliation = value;
    }

    get role(): string  | undefined{
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    get legalEntityType(): string  | undefined{
        return this._legalEntityType;
    }

    set legalEntityType(value: string) {
        this._legalEntityType = value;
    }
}