// server/services/roleService.js
const db = require('../db');

const getUserRole = async (userId) => {
    const user = await db.users.findById(userId);
    return user.role;
};

const setUserRole = async (userId, role) => {
    await db.users.updateOne({ _id: userId }, { $set: { role } });
};

module.exports = { getUserRole, setUserRole };