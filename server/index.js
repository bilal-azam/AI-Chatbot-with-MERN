// server/index.js
const rateLimiter = require('./middleware/rateLimiter');

// Existing code...

// Apply rate limiting middleware
app.use(rateLimiter);