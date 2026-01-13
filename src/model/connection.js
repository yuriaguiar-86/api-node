const { Sequelize } = require('sequelize');
require('dotenv').config();

class Connection {
    constructor() {
        this.init();
    }

    init() {
        this.sequelize = new Sequelize({
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            dialect: 'postgres',
            logging: false
        });
    }
}

module.exports = new Connection();