import winston from 'winston';

// Define log format
const logFormat = winston.format.printf(({ timestamp, level, message }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Create logger instance
const logger = winston.createLogger({
  level: 'info', // Set log level (info, warn, error, etc.)
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Add timestamp to logs
    logFormat // Use custom log format
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Error logs
    new winston.transports.File({ filename: 'logs/combined.log' }), // Combined logs (info, error, etc.)
  ],
});

export default logger;
