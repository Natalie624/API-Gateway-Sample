/*
* Configure authentication and apply the different rules to the routes of our configuration
*
*/

const Keycloak = require('keycloak-connect');
const session = require('express-session');


// this function takes the express app and our route configuration as input paramters
const setupAuth = (app, routes) => {
    // create a new memory store to enable Keycloak integration and setup the app to use the sessions, and activate the keycloak middleware
    var memoryStore = new session.MemoryStore();
    var keycloak = new Keycloak({ store: memoryStore });

    app.use(session({
        secret:'<RANDM GENERATED TOKEN>',
        resave: false,
        saveUninitialized: true,
        store: memoryStore
    }));

    app.use(keycloak.middleware());

    routes.forEach(r => {
        if (r.auth){
            // here we secure the endpoints
            app.use(r.url, keycloak.protect(), function (req, res, next) {
                next();
            });
        }
    });
}

exports.setupAuth = setupAuth