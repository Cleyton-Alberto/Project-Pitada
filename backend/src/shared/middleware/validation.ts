import type { RequestHandler } from "express";
import { StatusCode } from "../utils/StatusCode.js";
import { ObjectSchema, ValidationError, type AnyObject } from "yup";

type TProperty = "body" | "header" | "params" | "query";

type TGetSchema = <T extends AnyObject>(
  schema: ObjectSchema<T>,
) => ObjectSchema<T>;

type TAllSchemas = Record<TProperty, ObjectSchema<any>>;

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;

export const validation: TValidation =
  (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas((schema) => schema);
    const errorsResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(([key, schema]) => {
      try {
        schema.validateSync(req[key as TProperty], { abortEarly: false });
      } catch (error) {
        const yupError = error as ValidationError;
        const validationErrors: Record<string, string> = {};

        yupError.inner.forEach((error) => {
          if (error.path === undefined) return;
          validationErrors[error.path] = error.message;
        });

        errorsResult[key] = validationErrors;
      }
    });

    if (Object.entries(errorsResult).length === 0) {
      return next();
    } else {
      return res.status(StatusCode.BAD_REQUEST).json({ errors: errorsResult });
    }
  };
