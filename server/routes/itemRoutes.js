// server/routes/itemRoutes.js
const roleMiddleware = require('../middleware/roleMiddleware');

router.get('/items', authMiddleware, roleMiddleware(['admin', 'user']), async (req, res, next) => {
    // Route code
});

router.post('/items', authMiddleware, roleMiddleware(['admin']), async (req, res, next) => {
    // Route code
});