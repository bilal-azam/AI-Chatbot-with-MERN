import React, { useEffect, useState } from 'react';
import { fetchItems } from '../api';

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const items = await fetchItems();
            setItems(items);
        };
        getItems();
    }, []);

    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

export default ItemList;