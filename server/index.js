// server/index.js
const errorHandler = require('./middleware/errorHandler');

// Existing code...

// Use logging middleware
app.use(errorHandler);