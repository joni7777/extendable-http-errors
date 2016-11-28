const ExtendableError = require('../lib/extendable-error');

module.exports = class InternalServerError extends ExtendableError {
    constructor(message = "Internal Server Error", section = "Internal", code = 500, data = {}){
        super(message);
        this.data = data;
        this.code = code;
        this.status = 500;
        this.uuid = _.uuid();
        this.section = section;
    }
};