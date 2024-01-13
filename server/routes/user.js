// server/routes/user.js (update)
const { logProfileUpdate } = require('../middleware/logger');

// Apply logging middleware
router.put('/profile', auth, logProfileUpdate, async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (name) user.name = name;
        if (email) user.email = email;

        await user.save();
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});