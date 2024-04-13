const request = require('supertest');
const app = require('../server');

describe('Role-Based Access Control Tests', () => {
    it('should allow admin to access items', async () => {
        const token = await request(app)
            .post('/login')
            .send({ email: 'admin@example.com', password: 'password' })
            .then(res => res.body.token);
        
        const res = await request(app)
            .get('/items')
            .set('Authorization', token)
            .expect(200);
        
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should deny non-admin access to post items', async () => {
        const token = await request(app)
            .post('/login')
            .send({ email: 'user@example.com', password: 'password' })
            .then(res => res.body.token);
        
        const res = await request(app)
            .post('/items')
            .set('Authorization', token)
            .send({ name: 'New Item' })
            .expect(403);
        
        expect(res.body).toHaveProperty('error', 'Forbidden.');
    });
});