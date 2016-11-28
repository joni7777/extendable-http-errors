const httpErrors = require('./http-errors');
const initGlobalErrors = require('./lib/init-global-errors');
const prettifyErrorFunction = require('./lib/prettify-error.function');
const prettifyErrorMiddleware = require('./lib/prettify-error.middleware');

module.exports = {
    httpErrors,
    initGlobalErrors,
    prettifyErrorFunction,
    prettifyErrorMiddleware
};

