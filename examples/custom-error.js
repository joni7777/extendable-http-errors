const extendableHttpErrors = require('extendable-http-errors');

class BadLoginRequest extends extendableHttpErrors.httpErrors.BadRequestError {
    constructor(msg, section, code, reason){
        reason = reason.toUpperCase();
        super(msg, section, code, {reason: reason});
    }
}

const customErrors = {
    BadLoginRequest
};

extendableHttpErrors.initGlobalErrors(customErrors);

console.log(new BadLoginRequest("Bad Login Request!", "SpecialLogin", 9876, "User is not special enough"));