const User = require("../model/repository/user");

class UserService {
    async findAll() {
        return await User.findAll();
    }

    async findById(id, transaction) {
        const user = await User.findByPk(id, { transaction });

        if (!user) {
            throw new Error('Usuário não encontrado!');
        }
        return user;
    }

    async create(email, password, transaction) {
        return await User.create({
            email, password
        }, { transaction });
    }

    async update(id, email, password, transaction) {
        const user = await this.findById(id, transaction);

        user.email = email ?? user.email;
        user.password = password ?? user.password;

        return await user.save({ transaction });
    }

    async destroy(id, transaction) {
        const user = await this.findById(id, transaction);
        await user.destroy({ transaction });
        return true;
    }
}

module.exports = new UserService();