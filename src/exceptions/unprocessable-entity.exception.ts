import { StatusCodes } from 'http-status-codes';
import { ERROR_MESSAGES } from '../constants/error.constants';
import ApplicationException from './application.exception';

export default class UnprocessableEntityException extends ApplicationException {
  constructor(message = ERROR_MESSAGES.UNPROCESSABLE_ENTITY) {
    super(message, StatusCodes.UNPROCESSABLE_ENTITY);
  }
}
