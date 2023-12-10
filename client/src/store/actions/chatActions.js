// client/src/store/actions/chatActions.js
import axios from 'axios';
import { SEND_MESSAGE } from './types';

export const sendMessage = (message) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:5000/message', { message });
        dispatch({
            type: SEND_MESSAGE,
            payload: res.data.response
        });
    } catch (error) {
        console.error(error);
    }
};