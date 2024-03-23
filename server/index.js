// server/index.js
const express = require('express');
const app = express();
const rateLimit = require('./middleware/rateLimitMiddleware');
const itemRoutes = require('./routes/itemRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

app.use(express.json());
app.use(rateLimit);
app.use('/api', itemRoutes);
app.use(errorMiddleware);

app.listen(5000, () => console.log('Server running on port 5000'));