const CustomAPIError = require('./custom-error');
// installed and required http-status-codes..
const { StatusCodes } = require('http-status-codes');

class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.StatusCodes = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnauthenticatedError;