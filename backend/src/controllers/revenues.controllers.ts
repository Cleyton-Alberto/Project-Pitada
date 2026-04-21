import type { Request, Response } from "express";

export const getRevenues = (_: Request, res: Response) => {
  return res.send("Olá Mundo");
};
