const BaseError = require('./Base.error');
const { StatusCodes } = require('http-status-codes');
class NotImplemented extends BaseError {
  constructor(methodName) {
    super(
      'Not Implemented',
      StatusCodes.NOT_IMPLEMENTED,
      `Method ${methodName} is not implemented yet.`,
      {}
    );
  }
}
module.exports = NotImplemented;
