import {TitlesModel} from "./titles-model";
import {InterestedPartiesModel} from "./interested-parties-model";

export class CisacRequestModel {
    private _titles: Array<TitlesModel>
    private _interestedParties: Array<InterestedPartiesModel>

    get titles(): Array<TitlesModel> {
        return this._titles;
    }

    set titles(value: Array<TitlesModel>) {
        this._titles = value;
    }

    get interestedParties(): Array<InterestedPartiesRequestModel> {
        return this._interestedParties;
    }

    set interestedParties(value: Array<InterestedPartiesRequestModel>) {
        this._interestedParties = value;
    }
}