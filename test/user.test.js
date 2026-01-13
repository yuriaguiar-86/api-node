const connection = require('../src/model/connection');

describe('Test users', () => {
    let transaction;
    let userId;

    beforeAll(async () => {
        this.transaction = await connection.sequelize.transaction();
    });

    afterAll(async () => {
        await this.transaction.rollback();
    });

    // Add
    it('create a new user', () => {

    });

    // Edit
    it('update a user', () => {

    });

    // Delete
    it('remove a user', () => {

    });
});