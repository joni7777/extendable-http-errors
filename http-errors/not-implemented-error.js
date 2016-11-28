const ExtendableError = require('../lib/extendable-error');

module.exports = class NotImplementedError extends ExtendableError {
    constructor(message = "Not Implemented Error", section = "NotImplemented", code = 501, data = {}){
        super(message);
        this.data = data;
        this.code = code;
        this.status = 501;
        this.uuid = _.uuid();
        this.section = section;
    }
};