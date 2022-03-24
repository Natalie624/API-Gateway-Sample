/*
* You can start the sever by running one of the following commands in terminal:
* node server.js
* npm run start
* 
*/


const express = require('express')

const {ROUTES} = require("./routes");
const {setupLogging} = require('./logging');
const {setupProxies} = require("./proxy");
const {setupAuth} = require("./auth");

const app = express()
const port = 3000;

setupLogging(app);
setupAuth(app, ROUTES);
setupProxies(app, ROUTES);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

