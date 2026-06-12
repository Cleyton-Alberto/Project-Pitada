import type { Request, Response } from "express";
import * as yup from "yup";

export interface IRevenues {
  name: string;
  description: string;
}

const bodyValidation: yup.Schema<IRevenues> = yup.object().shape({
  name: yup.string().required().min(3),
  description: yup.string().required().min(50),
});

const create = async (req: Request<{}, {}, IRevenues>, res: Response) => {
  const data = req.body;
  let validateData: IRevenues | undefined = undefined;

  try {
    validateData = await bodyValidation.validate(data, { abortEarly: false });
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const validationErrors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (error.path === undefined) return;
      validationErrors[error.path] = error.message;
    });

    return res.status(400).json({ errors: validationErrors });
  }

  console.log(validateData);
};

export { create };
