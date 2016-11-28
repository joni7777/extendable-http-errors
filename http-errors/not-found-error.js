const ExtendableError = require('../lib/extendable-error');

module.exports = class NotFoundError extends ExtendableError {
    constructor(message = "Not Found Error", section = "NotFound", code = 404, data = {}){
        super(message);
        this.data = data;
        this.code = code;
        this.status = 404;
        this.uuid = _.uuid();
        this.section = section;
    }
};