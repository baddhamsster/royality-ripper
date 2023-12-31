import express, {Express, json, NextFunction, Request, Response} from "express";
import dotenv from "dotenv"
import bmiController from "../endpoints/bmi/bmi.controller";
import cisacController from "../endpoints/cisac/cisac.controller";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(json());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server")
});

app.use('/api/bmi', bmiController);
app.use('/api/cisac', cisacController);
app.use((err: Error, req: Request, res:Response) => {
    res.status(500).json({message: err.message});
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});