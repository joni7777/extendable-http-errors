const _ = require('lodash-uuid');

const ExtendableError = require('../lib/extendable-error');

module.exports = class BadRequestError extends ExtendableError {
    constructor(message = "Bad Request Error", section = "BadRequest", code = 400, data = {}){
        super(message);
        this.data = data;
        this.code = code;
        this.status = 400;
        this.uuid = _.uuid();
        this.section = section;
    }
};