// server/middleware/cloudwatch.js
const AWS = require('aws-sdk');
const cloudwatch = new AWS.CloudWatchLogs();

const logToCloudWatch = (logGroupName, logStreamName, message) => {
    const params = {
        logEvents: [{ message, timestamp: Date.now() }],
        logGroupName,
        logStreamName
    };

    cloudwatch.putLogEvents(params, (err) => {
        if (err) console.error('Failed to log to CloudWatch:', err);
    });
};

module.exports = { logToCloudWatch };