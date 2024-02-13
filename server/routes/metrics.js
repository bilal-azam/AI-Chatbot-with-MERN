// server/routes/metrics.js
const express = require('express');
const router = express.Router();

router.get('/metrics', (req, res) => {
    res.status(200).json({ uptime: process.uptime(), memoryUsage: process.memoryUsage() });
});

module.exports = router;