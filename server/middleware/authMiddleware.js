// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access denied.');

    jwt.verify(token, secret, (err, user) => {
        if (err) return res.status(403).send('Forbidden.');
        req.user = user;
        next();
    });
};

module.exports = authMiddleware;