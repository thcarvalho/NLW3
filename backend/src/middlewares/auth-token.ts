import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function (req: Request, res: Response, next: NextFunction) {
  const token = <string>req.headers['authorization'];
  if (!token) {
    res.status(401).send({error: 'no-token-provided'});
  }

  const verified = jwt.verify(token, process.env.JWT_TOKEN as string)

  res.locals.jwtPayload = verified

  return next();
}