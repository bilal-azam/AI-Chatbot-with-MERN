const request = require('supertest');
const app = require('../server');

describe('Error Handling Tests', () => {
    it('should handle server errors', async () => {
        const res = await request(app)
            .get('/api/trigger-error')
            .expect(500);
        expect(res.body.error).toBe('Something went wrong!');
    });
});