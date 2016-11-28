const _ = require('lodash');

const customHttpErrorsCreator = require('./custom-http-errors');

module.exports = (userCustomErrors = {}) => {
    _.extend(customHttpErrorsCreator, userCustomErrors);

    _.each(customHttpErrorsCreator, (CustomHttpError, errorName) => {
        global[errorName] = CustomHttpError;
    });
};