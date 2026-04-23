import type { Request, Response } from "express";

const getRevenues = (_: Request, res: Response) => {
  return res.send("Olá Mundo");
};

const postRevenues = (req: Request, res: Response) => {
  return res.status(200).json(req.body);
};

export { getRevenues, postRevenues };
