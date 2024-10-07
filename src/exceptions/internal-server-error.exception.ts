import { StatusCodes } from 'http-status-codes';
import { ERROR_MESSAGES } from '../constants/error.constants';
import ApplicationException from './application.exception';

export default class InternalServerErrorException extends ApplicationException {
  constructor(message = ERROR_MESSAGES.INTERNAL_SERVER_ERR) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}
