const prettifyErrorFunction = require('./prettify-error.function');

module.exports = (err, req, res, next) => {
    next(prettifyErrorFunction(err));
};