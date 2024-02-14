// server/index.js
const metricsRoute = require('./routes/metrics');

// Existing code...

// Add metrics route
app.use('/api', metricsRoute);