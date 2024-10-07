import { NextFunction, Request, Response } from 'express';
import expressWinston from 'express-winston';
import logger from '../utils/logger.utils';

// Middleware to log HTTP requests
export const requestLogger = expressWinston.logger({
  winstonInstance: logger,
  msg: '{{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
  meta: true, // Include additional meta information about the request
  expressFormat: true, // Use the default express request logger format
  colorize: false, // No colorize here since we handle it in the logger
  ignoreRoute: (_req, _res) => false, // Logs all routes
});

// Custom error handler to log errors
export const errorLogger = (err: Error, _req: Request, _res: Response, next: NextFunction) => {
  logger.error(err.message || 'Unknown error'); // Log the error message
  next(err); // Pass the error to the next middleware (e.g., your global error handler)
};
