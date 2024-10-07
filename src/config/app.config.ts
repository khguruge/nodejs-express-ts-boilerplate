import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { ENV } from '../constants/env.constants';
import { ERROR_MESSAGES } from '../constants/error.constants';
import GlobalErrorHandler from '../middleware/global-error-handler.middleware';
import { errorLogger, requestLogger } from '../middleware/logger.middleware';
import SuccessResponseHandler from '../middleware/success-response-handler.middleware';
import routes from '../routes/index';
import { corsOptions } from './cors.config';
import { connectToDB } from './db.config';
import ENVIRONMENT from './env.config';

// Create a rate limit rule
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 200, // limit each IP to 200 requests per windowMs
  message: ERROR_MESSAGES.TOO_MANY_REQUESTS,
});

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse cookies attached to the client request object
app.use(cookieParser());

// Helmet helps secure Express apps by setting various HTTP headers
app.use(helmet());

// Enable Cross-Origin Resource Sharing (CORS) with specific options
app.use(cors(corsOptions));

// Apply the rate limiter to all requests
app.use(limiter);

if (ENVIRONMENT.nodeEnv !== ENV.TEST) {
  // Connect to DB
  connectToDB();
}

// Use request logging middleware
app.use(requestLogger);

// Middleware to handle successful responses and format them
app.use(SuccessResponseHandler);

// Use your routes
app.use('/', routes);

// Use error logging middleware
app.use(errorLogger);

// global error handler to handle any unhandled errors
app.use(GlobalErrorHandler);

export default app;
