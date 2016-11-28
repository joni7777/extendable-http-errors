const _ = require('lodash-uuid');

const ExtendableError = require('../lib/extendable-error');

module.exports = class ForbiddenError extends ExtendableError {
    constructor(message = "Forbidden Error", section = "Forbidden", code = 403, data = {}){
        super(message);
        this.data = data;
        this.code = code;
        this.status = 403;
        this.uuid = _.uuid();
        this.section = section;
    }
};