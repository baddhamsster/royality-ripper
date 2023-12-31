import {Router} from "express";
import {getDataPointDictionary, searchByTitleAndContributor} from "./cisac.service";
import {CisacResponseModel} from "../../Models/cisac-response-model";

const CisacController = Router();
CisacController.post('/', async (req, res) => {
    console.log(req.body)
    searchByTitleAndContributor(req.body).then(response => res.status(200).send(JSON.parse(response.body))).catch(e => console.log(e))
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
