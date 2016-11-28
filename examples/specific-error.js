const InternalServerError = require('extendable-http-errors').httpErrors.InternalServerError;

try {
    throw new Error("Oops");
}
catch (err) {
    throw new InternalServerError("Something Not Good!", "HERE", 5001, {originalError: err});
}

