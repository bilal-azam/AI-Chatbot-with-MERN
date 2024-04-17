const db = require('../server/db');
const roleService = require('../server/services/roleService');

describe('Role Management Tests', () => {
    beforeAll(async () => {
        await db.users.create({ _id: '123', role: 'user' });
    });

    afterAll(async () => {
        await db.users.deleteMany({});
    });

    it('should get user role', async () => {
        const role = await roleService.getUserRole('123');
        expect(role).toBe('user');
    });

    it('should set user role', async () => {
        await roleService.setUserRole('123', 'admin');
        const role = await roleService.getUserRole('123');
        expect(role).toBe('admin');
    });
});