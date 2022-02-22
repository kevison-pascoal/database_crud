import "reflect-metadata"; //10.1K (gzipped: 3k)
import express from "express";
import "./database";
import { routes } from "./router";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is running!"));