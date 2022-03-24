/*
*
* Here we create a configuratio of the different routes we want to support in our API gateway. Each route can have multiple
* properties based on features that should be enabled. 
* For the sake of simplicity we have identified two routes. Once that represents the endpoint of a free (/free) service and one
* representing a preimium (/premium) service. 
*
*/

const ROUTES = [
    {
        //path to match the with incoming requests - can be any path supported by Express
        url: '/free',
        // Boolean respresenting if user needs auth or not for accessing the endpoint
        auth: false,
        // Boolean if credit check needs to be executed for this request
        creditCheck: false,
        // configuration for apply rate limiting to the service
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        // proxy configuration containing information about the target to which the request should be directed
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
        }
    },
    {
        url: '/premium',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/premium`]: '',
            },
        }
    }
]

exports.ROUTES = ROUTES