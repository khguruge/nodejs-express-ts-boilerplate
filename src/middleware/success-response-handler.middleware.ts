import { NextFunction, Request, Response } from 'express';
import { getReasonPhrase } from 'http-status-codes';

// Middleware function to intercept success responses
const SuccessResponseHandler = (req: Request, res: Response, next: NextFunction) => {
  // Save the original send function
  const originalSend = res.send;

  // Replace the send function with a custom implementation
  res.send = function (body: string) {
    // Check if the response has a success status code (2xx range)
    if (
      res.statusCode >= 200 &&
      res.statusCode < 300 &&
      res.getHeader('Content-Type')?.toString().includes('application/json') &&
      !res.locals.skipResponseMiddleware
    ) {
      // Modify the response body here
      // For example, add a custom property to the response body
      const modifiedBody = {
        error: false,
        message: getReasonPhrase(res.statusCode),
        data: JSON.parse(body),
      };

      // Call the original send function with the modified body
      return originalSend.call(res, JSON.stringify(modifiedBody));
    } else {
      // For error responses, call the original send function without modification
      return originalSend.call(res, body);
    }
  };

  // Move to the next middleware or route handler
  next();
};

export default SuccessResponseHandler;
