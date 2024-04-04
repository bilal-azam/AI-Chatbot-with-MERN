const request = require('supertest');
const app = require('../server');

describe('Authentication Tests', () => {
    it('should login and receive a token', async () => {
        const res = await request(app)
            .post('/login')
            .send({ email: 'test@example.com', password: 'password' })
            .expect(200);
        expect(res.body).toHaveProperty('token');
    });
});