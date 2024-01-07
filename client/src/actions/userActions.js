// client/src/actions/userActions.js
import axios from 'axios';

export const getUserProfile = () => async (dispatch) => {
    const res = await axios.get('/api/user/profile');
    dispatch({ type: 'GET_PROFILE', payload: res.data });
};

export const updateUserProfile = (profile) => async (dispatch) => {
    const res = await axios.put('/api/user/profile', profile);
    dispatch({ type: 'UPDATE_PROFILE', payload: res.data });
};