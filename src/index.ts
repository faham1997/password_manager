import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

import exampleRoute from "./routes/example.routes";

import {DatabaseConnection} from './config/db'
DatabaseConnection();

app.use(express.json());

//Use Routes
app.use("/api/v1/example", exampleRoute);

app.get("/", (req: Request, res: Response) => {
  res.json("Server is running successfully!");
});

app.listen(PORT, console.log("Server started on port: " + PORT));
