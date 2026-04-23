import { Router } from "express";
import {
  getRevenues,
  postRevenues,
} from "../controllers/revenues.controllers.js";

export const revenuesRoutes = Router();

revenuesRoutes.get("/", getRevenues);

revenuesRoutes.post("/test", postRevenues);
