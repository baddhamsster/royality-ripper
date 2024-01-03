import {Router} from "express";
import {getDataPointDictionary, searchByTitleAndContributor, validateOrRetrieveToken} from "./cisac.service";
import {CisacResponseModel} from "../../Models/cisac-response-model";
import {WorksModel} from "../../Models/works-model";
import {AgencyEnum} from "../../enums/agency.enum";
import {updateBMIData} from "../bmi/bmi.service";

const CisacController = Router();
CisacController.post('/', async (req, res) => {
    validateOrRetrieveToken().then((token: string) => {
        searchByTitleAndContributor(req.body, token)
            .then(response => {
                const cisicData: CisacResponseModel[] = JSON.parse(response.body)
                updateBMIData(cisicData)
                res.status(200).send(cisicData)
            })
            .catch(e => console.log(e))
    })
});
CisacController.get('/', async (req, res) => {
    getDataPointDictionary().then((response: CisacResponseModel) => res.status(200).send(response));

});
CisacController.patch('/', async (req, res) => {
    res.status(415).send()
});
CisacController.delete('/', async (req, res) => {
    res.status(415).send()
});
export default CisacController
