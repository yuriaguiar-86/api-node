const { Sequelize } = require('sequelize');
require('dotenv').config();

class Connection {
    constructor() {
        this.init();
    }

    init() {
        this.sequelize = new Sequelize({
            host: process.env.PG_HOST,
            database: process.env.PG_DB,
            username: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            
            dialect: 'postgres',
            logging: false
        });
    }
}

module.exports = new Connection();