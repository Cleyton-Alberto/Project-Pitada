import { Router } from "express";
import { create } from "../controllers/revenues/Create.controller.js";

export const router = Router();

router.get("/", (req, res) => {
  res.send("Olá DEV");
});

router.post("/revenues", create);
