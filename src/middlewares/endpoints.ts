import { Request, Response } from 'express';

export const endpoints = (req: Request, res: Response): void => {
  res.status(404).send({
    error: "error",
    descripcion: `Ruta ${req.originalUrl} método ${req.method} no implementada`,
  });
};