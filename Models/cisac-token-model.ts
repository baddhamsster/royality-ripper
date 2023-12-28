export class CisacTokenModel {
    private _success: boolean;
    private _fromCache: boolean;
    private _tokenType: string;
    private _token: string;

    get success(): boolean {
        return this._success;
    }

    set success(value: boolean) {
        this._success = value;
    }

    get fromCache(): boolean {
        return this._fromCache;
    }

    set fromCache(value: boolean) {
        this._fromCache = value;
    }

    get tokenType(): string {
        return this._tokenType;
    }

    set tokenType(value: string) {
        this._tokenType = value;
    }

    get token(): string {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }
}