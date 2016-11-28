module.exports = (err) => {
    let {status, message, stack, name} = err;

    return(Object.assign({}, err, {status, message, stack, name}));
};