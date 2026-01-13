const { DataTypes } = require('sequelize');
const connection = require('../connection');

class User {
    constructor() {
        this.model = connection.sequelize.define('users', {
            id: { 
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            email: { 
                unique: true,
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { msg: 'O campo e-mail é obrigatório!' },
                    notNull: { msg: 'O campo e-mail é obrigatório!' },
                    isEmail: { msg: 'Informe um e-mail válido!' }
                }
            },
            password: { 
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { msg: 'O campo senha é obrigatório!' },
                    notNull: { msg: 'O campo senha é obrigatório!' },
                    min: { msg: 'A senha deve ter pelo menos 08 (oito) caracteres!' }
                }
            }
        });
    }
}

module.exports = new User().model;