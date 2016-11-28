# Extendable Http Errors

## Introduction

> Error creator for creating custom made and common HTTP errors for node application.
> Each http error contains the http status.
> The user can define the error code for the application to identify.

## Implemented Http Errors
* BadRequestError
* ForbiddenError
* ImATeapot
* InternalServerError
* NotFoundError
* NotImplementedError
* ServiceUnAvailable
* UnauthorizedError

## Installation

> npm install generic-error-creator --save

## Code Samples

### Use specific http error:
```
const httpErrors = require('extendable-http-errors').httpErrors;

//No need to change status it got the default type of http error status
function (req, res, next) {    
    let errMsg = "Error Route Not Found";
    let section = "Routes";
    let code = 9404; //error code for the client to identify the error
    let params = {url: req.url};
    
    let err = new httpErrors.NotFoundError(errMsg, section, code, params);
    next(err);
}

```

### Make all errors global
``` 
require('extendable-http-errors').initGlobalErrors();

console.log(new InternalServerError("Internal Server Error", "Core", 9500)); 
```

```
InternalServerError: Interl Server Error
  at /Users/Username/WebstormProjects/Project/app.js:12:15
  at Layer.handle [as handle_request] (/Users/Username/WebstormProjects/Project/node_modules/express/lib/router/layer.js:95:5)
  at next (/Users/Username/WebstormProjects/Project/node_modules/express/lib/router/route.js:131:13)
  at Route.dispatch (/Users/Username/WebstormProjects/Project/node_modules/express/lib/router/route.js:112:3)
  at Layer.handle [as handle_request] (/Users/Username/WebstormProjects/Project/node_modules/express/lib/router/layer.js:95:5)
  at /Users/Username/WebstormProjects/Project/node_modules/express/lib/router/index.js:277:22
  at Function.process_params (/Users/Username/WebstormProjects/Project/node_modules/express/lib/router/index.js:330:12)
  at next (/Users/Username/WebstormProjects/Project/node_modules/express/lib/router/index.js:271:10)
  at expressInit (/Users/Username/WebstormProjects/Project/node_modules/express/lib/middleware/init.js:33:5)
code: 9500,
section: 'Core',
uuid: '8a77fc8b-601c-4fbb-89df-570ced4fa42b'
```

### Custom Http Error
> Before changing the 'this',
> need to call the super method so the new extended error could be changed.

```
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
```

### Convert Error To Object To Send To The Client
```
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
    res.status(err.status).json(err);
});
```