const ExtendableError = require('../lib/extendable-error');

module.exports = class ServiceUnavailableError extends ExtendableError {
    constructor(message = "Service Unavailable Error", section = "ServiceUnavailable", code = 503, data = {}){
        super(message);
        this.data = data;
        this.code = code;
        this.status = 503;
        this.uuid = _.uuid();
        this.section = section;
    }
};