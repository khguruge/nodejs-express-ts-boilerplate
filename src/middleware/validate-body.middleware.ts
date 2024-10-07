/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ObjectSchema, ValidationError } from 'yup';

export const validateBody =
  (schema: ObjectSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Specify return type as Promise<void>
    try {
      await schema.validate(req.body); // Validate the body
      next(); // Call next() if validation is successful
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(StatusCodes.BAD_REQUEST).json({
          error: true,
          message: error.errors.join(', ') || 'Invalid request body',
        });
      } else {
        next(error); // Call next with the error if it's not a validation error
      }
    }
  };