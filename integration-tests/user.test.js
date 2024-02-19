const request = require('supertest');
const app = require('../server');

describe('User Routes', () => {
    it('should fetch user profile', async () => {
        const res = await request(app)
            .get('/api/profile')
            .set('Authorization', 'Bearer valid-token');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name');
    });

    it('should update user profile', async () => {
        const res = await request(app)
            .put('/api/profile')
            .set('Authorization', 'Bearer valid-token')
            .send({ name: 'New Name' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toBe('New Name');
    });
});