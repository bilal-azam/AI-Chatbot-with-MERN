// server/routes/chat.js
const auth = require('../middleware/auth');

router.post('/message', auth, (req, res) => {
    const { message } = req.body;
    res.json({ response: 'Message received' });
});