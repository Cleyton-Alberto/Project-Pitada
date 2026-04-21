import { Router } from "express";
import { getRevenues } from "../controllers/revenues.controllers";

export const revenuesRoutes = Router();

revenuesRoutes.get("/", getRevenues);
