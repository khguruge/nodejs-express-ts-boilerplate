import { StatusCodes } from 'http-status-codes';
import { ERROR_MESSAGES } from '../constants/error.constants';
import ApplicationException from './application.exception';

export default class NotFoundException extends ApplicationException {
  constructor(message = ERROR_MESSAGES.NOT_FOUND) {
    super(message, StatusCodes.NOT_FOUND);
  }
}
