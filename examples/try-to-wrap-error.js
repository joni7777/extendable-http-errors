const extendableHttpErrors = require('extendable-http-errors');

const app = express();
const customErrors = {
    CustomError: require('./errors/custom-error')
};

extendableHttpErrors.initGlobalErrors(customErrors);

app.use(extendableHttpErrors.prettifyErrorMiddleware);

app.get('/', function (req, res, next) {
    let err = new CustomError("Custom Error!!", "Custom", 9876, "User is not custom enough");
    next(err);
});

//Error Handler
app.use(function (err, req, res, next) {
    //If error is already created from the extendable-errors,
    //it will throw it self otherwise it will wrap it with bad request error.
    res.status(err.status).json(BadRequestError.tryToWrap(err));
});