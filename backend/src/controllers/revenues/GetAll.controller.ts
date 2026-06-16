import type { Request, RequestHandler, Response } from "express";
import * as yup from "yup";
import { validation } from "../../shared/middleware/Validation.js";
import { StatusCode } from "../../shared/utils/StatusCode.js";

export interface IQuery {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQuery>(
    yup.object().shape({
      page: yup.number().optional().moreThan(0),
      limit: yup.number().optional().moreThan(0),
      filter: yup.string().optional(),
    }) as yup.ObjectSchema<IQuery>,
  ),
}));

export const getAll = async (
  req: Request<{}, {}, {}, IQuery>,
  res: Response,
) => {
  console.log(req.query);
  return res.status(StatusCode.INTERNAL_SERVER_ERROR).send("Não implementado!");
};
