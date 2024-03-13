// client/src/api.js
const API_URL = process.env.REACT_APP_API_URL;

export const fetchItems = async () => {
    const response = await fetch(`${API_URL}/items`);
    return response.json();
};

export const createItem = async (itemData) => {
    const response = await fetch(`${API_URL}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData),
    });
    return response.json();
};