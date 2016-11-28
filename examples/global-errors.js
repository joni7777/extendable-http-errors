require('extendable-http-errors').initGlobalErrors();

console.log(new InternalServerError("Internal Server Error", "Core", 9500));