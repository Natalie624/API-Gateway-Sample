/*
* Here we set up the proxy rules that should be applied to our incoming requests. Our API gateway will be 
* responsible for redirecting incoming requests to actual micro services.
* We use a library called http-proxy-middleware from https://www.npmjs.com/package/http-proxy-middleware to
* configure teh different proxy rules for our routes.
*
*/

const { createProxyMiddleware } = require('http-proxy-middleware');

// this is adding the createProxyMiddleware for each route in our configuration. 
const setupProxies = (app, routes) => {
    routes.forEach(r => {
        app.use(r.url, createProxyMiddleware(r.proxy));
    })
}

exports.setupProxies = setupProxies
        