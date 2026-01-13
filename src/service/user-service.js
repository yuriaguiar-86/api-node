const User = require("../model/repository/user");

class UserService {
    async findAll() {
        return await User.findAll();
    }

    async findById(id) {
        const user = await User.findByPk(id);
        if (!user) throw new Error('Usuário não encontrado');
        return user;
    }

    async create(userData) {
        const user = await User.create(userData);
        return user;
    }

    async update(id, userData) {
        const user =await this.findById(id);
        await user.update(userData);
        return user;
    }

    async destroy(id) {
        const user = await this.findById(id);
        await user.destroy();
        return true;
    }
}

module.exports = new UserService();