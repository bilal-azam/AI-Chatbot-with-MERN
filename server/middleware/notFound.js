// server/middleware/notFound.js
const notFound = (req, res, next) => {
    res.status(404).json({ msg: 'Resource not found' });
};

module.exports = notFound;