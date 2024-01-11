// client/src/__tests__/userActions.test.js
import { getUserProfile, updateUserProfile } from '../actions/userActions';
import axios from 'axios';

jest.mock('axios');

describe('User Actions', () => {
    it('should fetch user profile', async () => {
        const profile = { name: 'John Doe', email: 'john@example.com' };
        axios.get.mockResolvedValue({ data: profile });

        const dispatch = jest.fn();
        await getUserProfile()(dispatch);

        expect(dispatch).toHaveBeenCalledWith({ type: 'GET_PROFILE', payload: profile });
    });

    it('should update user profile', async () => {
        const profile = { name: 'John Doe', email: 'john@example.com' };
        axios.put.mockResolvedValue({ data: profile });

        const dispatch = jest.fn();
        await updateUserProfile(profile)(dispatch);

        expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_PROFILE', payload: profile });
    });
});