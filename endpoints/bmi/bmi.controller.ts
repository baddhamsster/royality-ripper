import {Router} from 'express';
import {getBMIData} from "./bmi.service";

const bmiController = Router();
bmiController.post('/', async (req, res) => {
    const workID: number | undefined = (req.body as BMIRequestDTO ).workID;
    getBMIData(workID || 1).then(json => res.status(200).json(json))
});
bmiController.get('/', async (req, res) => {
    res.status(415).send()
});
bmiController.patch('/', async (req, res) => {
    res.status(415).send()
});
bmiController.delete('/', async (req, res) => {
    res.status(415).send()
});
export default bmiController


class BMIRequestDTO {
    workID: number | undefined
}