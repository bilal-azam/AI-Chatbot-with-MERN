// server/middleware/logger.js
const fs = require('fs');
const path = require('path');

const logProfileUpdate = (req, res, next) => {
    const logMessage = `Profile updated for user ${req.user.id} at ${new Date().toISOString()}
`;
    fs.appendFile(path.join(__dirname, '../logs/profileUpdates.log'), logMessage, (err) => {
        if (err) console.error('Failed to write log:', err);
    });
    next();
};

module.exports = { logProfileUpdate };