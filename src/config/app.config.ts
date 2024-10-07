import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { corsOptions } from './cors.config';

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse cookies attached to the client request object
app.use(cookieParser());

// Helmet helps secure Express apps by setting various HTTP headers
app.use(helmet());

// Enable Cross-Origin Resource Sharing (CORS) with specific options
app.use(cors(corsOptions));



export default app;
