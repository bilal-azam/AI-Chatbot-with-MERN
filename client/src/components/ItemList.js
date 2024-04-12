import React from 'react';
import AccessControl from './AccessControl';
import { fetchItems } from '../api';

const ItemList = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        const getItems = async () => {
            const items = await fetchItems();
            setItems(items);
        };
        getItems();
    }, []);

    return (
        <AccessControl allowedRoles={['admin', 'user']}>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </AccessControl>
    );
};

export default ItemList;