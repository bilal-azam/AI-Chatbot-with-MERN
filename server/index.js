// server/index.js
const notFound = require('./middleware/notFound');

// Existing code...

// Use 404 error handler after all routes
app.use(notFound);