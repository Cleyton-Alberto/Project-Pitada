import type { Request, RequestHandler, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware/validation.js";

export interface IRevenues {
  name: string;
  description: string;
}

export interface IFilter {
  filter?: string;
  // limit: number;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IRevenues>(
    yup.object().shape({
      name: yup.string().required().min(3),
      description: yup.string().required().min(50),
    }),
  ),

  query: getSchema<IFilter>(
    yup.object().shape({
      filter: yup.string().optional().min(3),
    }) as yup.ObjectSchema<IFilter>,
  ),
}));

const create = async (req: Request<{}, {}, IRevenues>, res: Response) => {
  console.log(req.body);
  return res.send("Create!");
};

export { create };
