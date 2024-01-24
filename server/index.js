// server/index.js
const { logToCloudWatch } = require('./middleware/cloudwatch');

// Example usage for logging requests
app.use((req, res, next) => {
    logToCloudWatch('api-logs', 'request-log', `Request: ${req.method} ${req.originalUrl}`);
    next();
});