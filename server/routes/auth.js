// server/routes/auth.js (update)
const authLogger = require('../middleware/authLogger');

// Apply logging middleware to login and registration routes
router.post('/login', authLogger, async (req, res) => {
    // Existing login logic
});

router.post('/register', authLogger, async (req, res) => {
    // Existing registration logic
});