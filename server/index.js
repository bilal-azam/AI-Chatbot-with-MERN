// server/index.js
const securityHeaders = require('./middleware/securityHeaders');

// Existing code...

// Use security headers middleware
app.use(securityHeaders);