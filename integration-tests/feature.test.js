const request = require('supertest');
const app = require('../server');

describe('Feature Tests', () => {
    it('should return a list of items', async () => {
        const res = await request(app)
            .get('/api/items')
            .expect(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should create a new item', async () => {
        const res = await request(app)
            .post('/api/items')
            .send({ name: 'New Item' })
            .expect(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toBe('New Item');
    });
});