import express, { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
config();

const app = express();

app.listen(process.env.PORT ?? 3000, () => console.log("FUNZIONA!"));
