import express from "express";
import cors from "cors";
import logger from "morgan";
import { routes } from "./routes";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(routes);
