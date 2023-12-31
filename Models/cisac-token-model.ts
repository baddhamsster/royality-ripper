export class CisacTokenModel {
    private _success: boolean | undefined;
    private _fromCache: boolean | undefined;
    private _tokenType: string | undefined;
    private _token: string | undefined;

    get success(): boolean | undefined {
        return this._success;
    }

    set success(value: boolean) {
        this._success = value;
    }

    get fromCache(): boolean | undefined {
        return this._fromCache;
    }

    set fromCache(value: boolean) {
        this._fromCache = value;
    }

    get tokenType(): string | undefined {
        return this._tokenType;
    }

    set tokenType(value: string) {
        this._tokenType = value;
    }

    get token(): string | undefined {
        return this._token;
    }

    set token(value: string) {
        this._token = value;
    }
}