// server/index.js
const healthRoute = require('./routes/health');

// Existing code...

// Add health check route
app.use('/api', healthRoute);