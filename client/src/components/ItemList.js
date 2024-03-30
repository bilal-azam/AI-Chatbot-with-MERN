import React, { useEffect, useState, useCallback } from 'react';
import { fetchItems } from '../api';

const ItemList = () => {
    const [items, setItems] = useState([]);

    const getItems = useCallback(async () => {
        const items = await fetchItems();
        setItems(items);
    }, []);

    useEffect(() => {
        getItems();
    }, [getItems]);

    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

export default ItemList;