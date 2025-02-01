import express, { json } from "express";

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Root endpoint with documentation
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to the HTTP Status Code Examples API",
        available_endpoints: {
            "1xx - Informational": {
                "/100": "Continue - Server received request headers",
                "/101": "Switching Protocols - Upgrading to WebSocket",
                "/102": "Processing - Request being processed"
            },
            "2xx - Success": {
                "/200": "OK - Request succeeded",
                "/201": "Created - Resource created successfully",
                "/202": "Accepted - Request accepted for processing"
            },
            "3xx - Redirection": {
                "/301": "Moved Permanently - Resource moved to new URL",
                "/302": "Found - Temporary redirect",
                "/307": "Temporary Redirect - Preserves HTTP method"
            },
            "4xx - Client Errors": {
                "/400": "Bad Request - Invalid syntax",
                "/401": "Unauthorized - Authentication required",
                "/404": "Not Found - Resource doesn't exist"
            },
            "5xx - Server Errors": {
                "/500": "Internal Server Error - Something went wrong",
                "/502": "Bad Gateway - Invalid response from upstream",
                "/503": "Service Unavailable - Server temporarily down"
            }
        }
    });
});

// 1xx - Informational responses
app.get('/100', (req, res) => {
    res.status(100).json({
        message: "Continue - Please continue with the request"
    });
});

app.get('/101', (req, res) => {
    res.status(101)
        .set('Upgrade', 'websocket')
        .set('Connection', 'Upgrade')
        .json({
            message: "Switching Protocols - Upgrading to WebSocket"
        });
});

app.get('/102', (req, res) => {
    res.status(102).json({
        message: "Processing - Request is being processed"
    });
});

// 2xx - Success responses
app.get('/200', (req, res) => {
    res.status(200).json({
        message: "OK - Your request was successful"
    });
});

app.post('/201', (req, res) => {
    res.status(201).json({
        message: "Created - Resource has been created successfully"
    });
});

app.post('/202', (req, res) => {
    res.status(202).json({
        message: "Accepted - Request has been accepted for processing"
    });
});

// 3xx - Redirection responses
app.get('/301', (req, res) => {
    res.status(301)
        .location('/new-location')
        .json({
            message: "Moved Permanently - Resource has moved to a new URL"
        });
});

app.get('/302', (req, res) => {
    res.status(302)
        .location('/temp-location')
        .json({
            message: "Found - Resource temporarily moved"
        });
});

app.get('/307', (req, res) => {
    res.status(307)
        .location('/temp-location')
        .json({
            message: "Temporary Redirect - Preserving HTTP method"
        });
});

// 4xx - Client Error responses
app.get('/400', (req, res) => {
    res.status(400).json({
        message: "Bad Request - The request has invalid syntax"
    });
});

app.get('/401', (req, res) => {
    res.status(401)
        .set('WWW-Authenticate', 'Basic realm="Access to site"')
        .json({
            message: "Unauthorized - Authentication is required"
        });
});

app.get('/404', (req, res) => {
    res.status(404).json({
        message: "Not Found - The requested resource doesn't exist"
    });
});

// 5xx - Server Error responses
app.get('/500', (req, res) => {
    res.status(500).json({
        message: "Internal Server Error - Something went wrong on our end"
    });
});

app.get('/502', (req, res) => {
    res.status(502).json({
        message: "Bad Gateway - Received an invalid response from the upstream server",
        details: "The proxy server received an invalid response from an upstream server"
    });
});

app.get('/503', (req, res) => {
    res.status(503)
        .set('Retry-After', '300') // Suggests client to retry after 300 seconds
        .json({
            message: "Service Unavailable - Server is temporarily unable to handle the request",
            details: "Server is under maintenance or is overloaded",
            retry_after: "300 seconds"
        });
});

// Support endpoints for redirects
app.get('/new-location', (req, res) => {
    res.status(200).json({
        message: "This is the new permanent location"
    });
});

app.get('/temp-location', (req, res) => {
    res.status(200).json({
        message: "This is the temporary location"
    });
});

app.listen(port, () => {
    console.table({ port: port });
    console.log('Server running at http://localhost:3000/');
});