// server/middleware/authLogger.js
const fs = require('fs');
const path = require('path');

const authLogger = (req, res, next) => {
    const logMessage = `Authentication event: ${req.method} ${req.originalUrl} at ${new Date().toISOString()}
`;
    fs.appendFile(path.join(__dirname, '../logs/authEvents.log'), logMessage, (err) => {
        if (err) console.error('Failed to write log:', err);
    });
    next();
};

module.exports = authLogger;