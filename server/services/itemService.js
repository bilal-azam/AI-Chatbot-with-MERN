// server/services/itemService.js
const Item = require('../models/item');

const getAllItems = async () => {
    return Item.find({});
};

const createItem = async (itemData) => {
    const newItem = new Item(itemData);
    return newItem.save();
};

module.exports = { getAllItems, createItem };