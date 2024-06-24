const BaseError = require('./Base.error');
const { StatusCodes } = require('http-status-codes');
class BadRequest extends BaseError {
  constructor(propertyName, details) {
    super(
      'Bad Request',
      StatusCodes.BAD_REQUEST,
      `Invalid Structure for ${propertyName} provided`,
      details
    );
  }
}
module.exports = BadRequest;
