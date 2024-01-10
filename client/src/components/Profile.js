// client/src/components/Profile.js (updated with Redux)
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../actions/userActions';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const [name, setName] = useState(user.name || '');
    const [email, setEmail] = useState(user.email || '');

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile({ name, email }));
    };

    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Profile;