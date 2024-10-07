import { StatusCodes } from 'http-status-codes';
import { ERROR_MESSAGES } from '../constants/error.constants';

export default class ApplicationException extends Error {
  status: number;

  constructor(
    message: string = ERROR_MESSAGES.INTERNAL_SERVER_ERR,
    status: number = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super(message);

    Error.captureStackTrace(this, this.constructor); // Capture stack trace

    this.name = this.constructor.name; // Set the name of the error
    this.status = status;
  }
}
