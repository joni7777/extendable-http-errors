module.exports = class ExtendableError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        this.isExtendableError = true;
        this.message = message;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }

    static wrapIfNotWrapped(err){
        if(err.isExtendableError){
            return err;
        }

        let newError = new this(err.message);
        // Take the stack from the old error,
        // and replace the first line with the first line with
        // the new error stack first line that contains extendable-error-name: message
        let errStack = (err.stack || "").split('\n');
        let newErrStack = (newError.stack || "").split('\n');
        errStack[0] = newErrStack[0];
        newError.stack = errStack.join('\n');
        return newError
    }
};