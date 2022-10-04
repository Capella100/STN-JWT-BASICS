const CustomAPIError = require('./custom-error');
// installed and required http-status-codes..
const { StatusCodes } = require('http-status-codes');

class BadRequest extends CustomAPIError {
    constructor(message) {
        super(message);
        this.StatusCodes = StatusCodes.BAD_REQUEST;
    }
}

module.exports = BadRequest;