import type { Request, RequestHandler, Response } from "express";
import * as yup from "yup";
import { StatusCode } from "../../shared/utils/StatusCode.js";
import { validation } from "../../shared/middleware/Validation.js";

export interface IParam {
  id?: number;
}

export interface IBody {
  name?: string;
  description?: string;
}

export const updateByIdValidation = validation((getSchema) => ({
  params: getSchema<IParam>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    }),
  ),
  body: getSchema<IBody>(
    yup.object().shape({
      name: yup.string().optional().min(3),
      description: yup.string().optional().min(30),
    }) as yup.ObjectSchema<IBody>,
  ),
}));

export const updateById = async (
  req: Request<IParam, {}, IBody>,
  res: Response,
) => {
  console.log(req.params.id);
  console.log(req.body);
  return res.status(StatusCode.INTERNAL_SERVER_ERROR).send("Não implementado!");
};
