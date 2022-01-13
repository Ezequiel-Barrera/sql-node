import { Request, Response, NextFunction } from 'express';

const admin = true;

export const isAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (admin) {
    next();
  } else {
    res.status(401).send({
      error: "error",
      descripcion: `Esta ruta ${req.originalUrl} , con el método ${req.method} , no esta autorizada`,
      message: 'Permiso denegado',
    });
  }
};