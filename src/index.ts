import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import {loginBMI} from "../puppeteer/loginBMI";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    loginBMI().then(() => res.send("Express + TypeScript Server"))

});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});