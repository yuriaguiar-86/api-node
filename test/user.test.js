const connection = require('../src/model/connection');
const userService = require('../src/service/user-service');

describe('Test users', () => {
    let transaction;
    let userId;

    beforeAll(async () => {
        transaction = await connection.sequelize.transaction();
    });

    afterAll(async () => {
        await transaction.rollback();
    });

    // Add
    it('create a new user', async () => {
        const user = {
            email: 'teste@email.com',
            password: 'Senha@123'
        };

        const response = await userService.create(user.email, user.password, transaction);
        
        userId = response.user.id;

        expect(response.user.email).toBe(user.email);
        expect(response.user.password).toBe(user.password);
    });

    // Edit
    it('update a user', async () => {
        const user = {
            email: 'novo_teste@email.com',
            password: 'Senha@123'
        };

        const response = await userService.update(userId, user.email, user.password, transaction);

        expect(response.user.email).toBe(user.email);
        expect(response.user.password).toBe(user.password);
    });

    // Delete
    it('remove a user', async () => {
        const response = await userService.destroy(userId, transaction);
        expect(response).toBe(true);
    });
});