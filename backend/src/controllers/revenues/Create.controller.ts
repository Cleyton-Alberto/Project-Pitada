import type { Request, RequestHandler, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware/Validation.js";

export interface IRevenues {
  name: string;
  description: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IRevenues>(
    yup.object().shape({
      name: yup.string().required().min(3),
      description: yup.string().required().min(30),
    }),
  ),
}));

export const create = async (
  req: Request<{}, {}, IRevenues>,
  res: Response,
) => {
  console.log(req.body);
  return res.send("Não implementado!");
};
