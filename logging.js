/*
*  This function provides logging information about incoming requests using the morgan library
* https://www.npmjs.com/package/morgan.  Morgan allows us to extend our Express server with logging
* capabilities. To install simply use: npm install morgan --save
*
*/


const morgan = require("morgan")

const setupLogging = (app) => {
    app.use(morgan('combined'));
}

exports.setupLogging = setupLogging