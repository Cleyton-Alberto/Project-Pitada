import { Router } from "express";
import { revenuesControllers } from "../controllers/revenues/index.js";

export const router = Router();

router.get("/", (req, res) => {
  res.send("Olá DEV");
});

router.get(
  "/revenues",
  revenuesControllers.getAllValidation,
  revenuesControllers.getAll,
);

router.get(
  "/revenues/:id",
  revenuesControllers.getByIdValidation,
  revenuesControllers.getById,
);

router.post(
  "/revenues",
  revenuesControllers.createValidation,
  revenuesControllers.create,
);

router.delete(
  "/revenues/:id",
  revenuesControllers.deleteByIdValidation,
  revenuesControllers.deleteById,
);

router.patch(
  "/revenues/:id",

  revenuesControllers.updateByIdValidation,
  revenuesControllers.updateById,
);
