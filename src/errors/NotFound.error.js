const BaseError = require('./Base.error');
const { StatusCodes } = require('http-status-codes');
class NotFound extends BaseError {
  constructor(resourceName, resourceValue) {
    super('Not Found', StatusCodes.NOT_FOUND, `${resourceName} not Found`, {
      resourceValue,
      resourceName,
    });
  }
}
module.exports = NotFound;
