import express from "express";
import { revenuesRoutes } from "./routes/revenues.routes.js";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(revenuesRoutes);

app.listen(port, () => console.log(`Sever Ok, Port: ${port}`));
