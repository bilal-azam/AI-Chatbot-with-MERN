// server/middleware/roleMiddleware.js
const roleMiddleware = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) return res.status(403).send('Forbidden.');
    next();
};

module.exports = roleMiddleware;