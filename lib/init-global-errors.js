const _ = require('lodash');

const httpErrors = require('../http-errors');

module.exports = (userCustomErrors = {}) => {
    _.extend(httpErrors, userCustomErrors);

    _.each(httpErrors, (CustomHttpError, errorName) => {
        global[errorName] = CustomHttpError;
    });
};