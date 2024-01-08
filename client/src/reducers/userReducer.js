// client/src/reducers/userReducer.js
const initialState = {
    user: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_PROFILE':
            return {
                ...state,
                user: action.payload
            };
        case 'UPDATE_PROFILE':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};