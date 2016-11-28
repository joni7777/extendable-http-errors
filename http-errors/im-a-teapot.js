const _ = require('lodash-uuid');

const ExtendableError = require('../lib/extendable-error');

module.exports = class ImATeapot extends ExtendableError {
    constructor(message = "Im A Teapot", section = "ImATeapot", code = 418, data = {}){
        super(message);
        this.data = data;
        this.code = code;
        this.status = 418;
        this.uuid = _.uuid();
        this.section = section;
    }
};