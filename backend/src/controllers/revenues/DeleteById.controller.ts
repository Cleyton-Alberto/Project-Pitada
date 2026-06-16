import type { Request, RequestHandler, Response } from "express";
import * as yup from "yup";
import { StatusCode } from "../../shared/utils/StatusCode.js";
import { validation } from "../../shared/middleware/Validation.js";

export interface IParam {
  id?: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParam>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    }),
  ),
}));

export const deleteById = async (req: Request<IParam>, res: Response) => {
  console.log(req.params);
  return res.status(StatusCode.INTERNAL_SERVER_ERROR).send("Não implementado!");
};
