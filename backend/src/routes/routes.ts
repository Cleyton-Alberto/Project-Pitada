import { Router } from "express";
import { create } from "../controllers/revenues/Create.controller.js";
import { revenuesControllers } from "../controllers/revenues/index.js";

export const router = Router();

router.get("/", (req, res) => {
  res.send("Olá DEV");
});

router.post(
  "/revenues",
  revenuesControllers.createValidation,
  revenuesControllers.create,
);
