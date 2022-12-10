import ErrorCategory from '../enums/errorCategory.js';
import { ErrorType } from './BaseError.js';

const ErrorCode: { [key: string]: ErrorType } = {
  ERR0000: {
    code: 'ERR0000',
    category: ErrorCategory.SYSTEM,
    msg: 'INTERNAL_SERVER_ERROR',
    description: '',
  },
  ERR0001: {
    code: 'ERR0001',
    category: ErrorCategory.USER,
    msg: 'NOT_FOUND',
    description: '',
  },
  ERR0002: {
    code: 'ERR0002',
    category: ErrorCategory.USER,
    msg: 'CANNOT_UPDATE_DUE_TO_OUTDATED_DATA',
    description: '',
  },
  ERR0003: {
    code: 'ERR0003',
    category: ErrorCategory.USER,
    msg: 'INVALID_PAGINATION_FORMAT',
    description: '',
  },
  ERR0004: {
    code: 'ERR0004',
    category: ErrorCategory.USER,
    msg: 'INVALID_PAGINATION_LIMIT',
    description: '',
  },
  ERR0005: {
    code: 'ERR0005',
    category: ErrorCategory.USER,
    msg: 'INVALID_PARAMETERS',
    description: 'Ensure that at least one parameter is brought',
  },
  ERR0006: {
    code: 'ERR0006',
    category: ErrorCategory.USER,
    msg: 'MISSING_PARAMETERS',
    description: '',
  },
  ERR0007: {
    code: 'ERR0007',
    category: ErrorCategory.USER,
    msg: 'DUPLICATED_KEY',
    description: '',
  },
  ERR0008: {
    code: 'ERR0008',
    category: ErrorCategory.USER,
    msg: 'BAD_REQUEST',
    description: '',
  },
  ERR0009: {
    code: 'ERR0009',
    category: ErrorCategory.USER,
    msg: 'METHOD_DEPRECATED',
    description: '',
  },
  ERR0010: {
    code: 'ERR0010',
    category: ErrorCategory.SYSTEM,
    msg: 'DATABASE_UNAVAILABLE',
    description: '',
  },
  ERR0011: {
    code: 'ERR0011',
    category: ErrorCategory.SYSTEM,
    msg: 'SERVICE_UNAVAILABLE',
    description: '',
  },
  ERR0012: {
    code: 'ERR0012',
    category: ErrorCategory.SYSTEM,
    msg: 'COLUMN_NOT_FOUND',
    description: '',
  },
  ERR0013: {
    code: 'ERR0013',
    category: ErrorCategory.SYSTEM,
    msg: 'DUPLICATED_ID_FOUND',
    description: '',
  },
  ERR0014: {
    code: 'ERR0014',
    category: ErrorCategory.SYSTEM,
    msg: 'ITEM_INACTIVE',
    description: '',
  },
  ERR0015: {
    code: 'ERR0015',
    category: ErrorCategory.BUSINESS,
    msg: 'RULE_NOT_APPLY',
    description: '',
  },
  ERR0016: {
    code: 'ERR0016',
    category: ErrorCategory.SYSTEM,
    msg: 'UNIQUE_VIOLATION',
    description: '',
  },
  ERR0100: {
    code: 'ERR0100',
    category: ErrorCategory.BUSINESS,
    msg: 'BOOKING_MODULE',
    description: 'Incorrect value for nights parameter, arrival and departure does not match.',
  },
  ERR0101: {
    code: 'ERR0101',
    category: ErrorCategory.USER,
    msg: 'BOOKING_MODULE',
    description: 'Incorrect value for nights parameter, value must be a number.',
  },
  ERR0102: {
    code: 'ERR0102',
    category: ErrorCategory.USER,
    msg: 'COMMON_ERRORS',
    description: 'Incorrect value for arrival, value must be a date',
  },
  ERR0103: {
    code: 'ERR0103',
    category: ErrorCategory.USER,
    msg: 'COMMON_ERRORS',
    description: 'Incorrect value for departure, value must be a date',
  },
  ERR0104: {
    code: 'ERR0104',
    category: ErrorCategory.USER,
    msg: 'BOOKING_MODULE',
    description: 'Incorrect value for nights parameter, value must be a positive number.',
  },
  ERR0105: {
    code: 'ERR0105',
    category: ErrorCategory.USER,
    msg: 'BOOKING_MODULE',
    description: 'Incorrect value for room category, value must be a string',
  },
  ERR0106: {
    code: 'ERR0106',
    category: ErrorCategory.USER,
    msg: 'BOOKING_MODULE',
    description: 'Maximum characters for room category reached',
  },
  ERR0107: {
    code: 'ERR0107',
    category: ErrorCategory.USER,
    msg: 'BOOKING_MODULE',
    description: 'Room category can not be null',
  },
  ERR0108: {
    code: 'ERR0108',
    category: ErrorCategory.USER,
    msg: 'BOOKING_MODULE',
    description: 'Incorrect value for room category pms, value must be a string',
  },
  ERR0109: {
    code: 'ERR0109',
    category: ErrorCategory.USER,
    msg: 'BOOKING_MODULE',
    description: 'Maximum characters for room category pms reached',
  },
  ERR0110: {
    code: 'ERR0110',
    category: ErrorCategory.USER,
    msg: 'BOOKING_MODULE',
    description: 'Room category pms can not be null',
  },
  ERR0111: {
    code: 'ERR0111',
    category: ErrorCategory.USER,
    msg: 'BOOKING_MODULE',
    description: 'arrival date can not be major than departure date',
  },
  ERR0200: {
    code: 'ERR0200',
    category: ErrorCategory.BUSINESS,
    msg: 'BOOKING_SENDING_MODULE',
    description: 'Incorrect date range',
  }
};

export default ErrorCode;
