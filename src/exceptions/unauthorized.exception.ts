import { StatusCodes } from 'http-status-codes';
import { ERROR_MESSAGES } from '../constants/error.constants';
import ApplicationException from './application.exception';

export default class UnauthorizedException extends ApplicationException {
  constructor(message = ERROR_MESSAGES.UNAUTHORIZED) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}
