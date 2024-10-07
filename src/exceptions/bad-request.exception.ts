import { StatusCodes } from 'http-status-codes';
import { ERROR_MESSAGES } from '../constants/error.constants';
import ApplicationException from './application.exception';

export default class BadRequestException extends ApplicationException {
  constructor(message = ERROR_MESSAGES.BAD_REQUEST) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
