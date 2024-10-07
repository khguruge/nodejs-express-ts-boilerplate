import { type ErrorRequestHandler, type NextFunction, type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ApplicationException from '../exceptions/application.exception';

// Explicitly type the error handler
const GlobalErrorHandler = (
  err: Error | ApplicationException, // Accept both generic errors and ApplicationException
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = err instanceof ApplicationException ? err.status : StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Internal Server Error';

  return res.status(status).json({
    error: true,
    message,
  });
};

export default GlobalErrorHandler as unknown as ErrorRequestHandler;
