import express from "express";
import dotenv from "dotenv";
import "./shared/services/YupTranslations.js";
import { router } from "./routes/routes.js";

dotenv.config({ quiet: true });

const server = express();
const port = process.env.PORT;

server.use(express.json());
server.use(router);

export { server };
