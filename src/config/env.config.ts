import dotenv from 'dotenv';

dotenv.config();

const ENVIRONMENT = {
  port: process.env.PORT || 8080,
  nodeEnv: process.env.NODE_ENV || 'development',
  DB_URI: process.env.DB_URI,
};

export default ENVIRONMENT;
