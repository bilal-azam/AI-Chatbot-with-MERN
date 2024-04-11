import React from 'react';
import { useEffect, useState } from 'react';
import { fetchUserRole } from '../api';

const AccessControl = ({ allowedRoles, children }) => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        const getRole = async () => {
            const userRole = await fetchUserRole();
            setRole(userRole);
        };
        getRole();
    }, []);

    if (role && allowedRoles.includes(role)) {
        return <>{children}</>;
    }
    return <p>Access Denied</p>;
};

export default AccessControl;