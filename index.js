const httpErrors = require('./http-errors');
const initGlobalErrors = require('./lib/init-global-errors');
const prettifyErrorMiddleware = require('./lib/prettify-error.middleware');

module.exports = {
    httpErrors,
    initGlobalErrors,
    prettifyErrorMiddleware
};

