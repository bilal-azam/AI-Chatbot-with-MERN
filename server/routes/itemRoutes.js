// server/routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const itemService = require('../services/itemService');

router.get('/items', async (req, res, next) => {
    try {
        const items = await itemService.getAllItems();
        res.json(items);
    } catch (error) {
        next(error);
    }
});

router.post('/items', async (req, res, next) => {
    try {
        const item = await itemService.createItem(req.body);
        res.status(201).json(item);
    } catch (error) {
        next(error);
    }
});

module.exports = router;