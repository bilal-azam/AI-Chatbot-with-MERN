// server/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemService = require('../services/itemService');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/items', authMiddleware, async (req, res, next) => {
    try {
        const items = await itemService.getAllItems();
        res.json(items);
    } catch (error) {
        next(error);
    }
});

router.post('/items', authMiddleware, async (req, res, next) => {
    try {
        const item = await itemService.createItem(req.body);
        res.status(201).json(item);
    } catch (error) {
        next(error);
    }
});

module.exports = router;