import express from "express";
import dotenv from "dotenv";
import "./shared/services/YupTranslations.js";
import { router } from "./routes/routes.js";

dotenv.config({ quiet: true });

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Sever Ok, Port: ${port}`));
