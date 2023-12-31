import {TitlesModel} from "./titles-model";
import {InterestedPartiesModel} from "./interested-parties-model";

export class CisacRequestModel {
    private _titles: Array<TitlesModel> | undefined;
    private _interestedParties: Array<InterestedPartiesModel> | undefined;

    get titles(): Array<TitlesModel> | undefined {
        return this._titles;
    }

    set titles(value: Array<TitlesModel>) {
        this._titles = value;
    }

    get interestedParties(): Array<InterestedPartiesModel>  | undefined{
        return this._interestedParties;
    }

    set interestedParties(value: Array<InterestedPartiesModel>) {
        this._interestedParties = value;
    }
}