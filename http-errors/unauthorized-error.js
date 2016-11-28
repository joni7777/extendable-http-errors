const _ = require('lodash-uuid');

const ExtendableError = require('../lib/extendable-error');

module.exports = class UnauthorizedError extends ExtendableError {
    constructor(message = "Unauthorized Error", section = "Unauthorized", code = 401, data = {}){
        super(message);
        this.data = data;
        this.code = code;
        this.status = 401;
        this.uuid = _.uuid();
        this.section = section;
    }
};