import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { APIBodyDTO } from '../dto/api.dto';

export const getAPI = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body as APIBodyDTO;
    if (body.name) console.log(body);

    res.status(StatusCodes.OK).json(body);
  } catch (error) {
    next(error);
  }
};
