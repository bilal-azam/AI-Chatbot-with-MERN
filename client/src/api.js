// client/src/api.js
const API_URL = process.env.REACT_APP_API_URL;

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return token ? { Authorization: token } : {};
};

export const fetchItems = async () => {
    const response = await fetch(`${API_URL}/items`, {
        headers: getAuthHeaders(),
    });
    return response.json();
};

export const createItem = async (itemData) => {
    const response = await fetch(`${API_URL}/items`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            ...getAuthHeaders()
        },
        body: JSON.stringify(itemData),
    });
    return response.json();
};

export const login = async (credentials) => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });
    return response.json();
};