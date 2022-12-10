import HttpStatusCode from '../enums/httpStatusCode.js';
import { BaseError, ErrorType } from './BaseError.js';

export default class Exception extends BaseError {
  readonly statusCode: HttpStatusCode;

  constructor(
    statusCode: HttpStatusCode, 
    errors?: ErrorType | ErrorType[], 
    warnings?: ErrorType | ErrorType[]
  ) {
    super(errors, warnings);
    this.name = 'Exception';
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, Exception.prototype);
  }
}
