module.exports = (err, req, res, next) => {
    let {status, message, stack, name} = err;
    let prettyError = Object.assign({}, err, {status, message, stack, name});

    next(prettyError);
};