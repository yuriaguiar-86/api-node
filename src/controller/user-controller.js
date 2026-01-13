const userService = require('../service/user-service');

class UserController {
    async index(_, res) { 
        try {
            const users = await userService.findAll();
            res.status(200).json(users);

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }

    async view(req, res) { 
        try {
            const id = req.params.id;
            const user = await userService.findById(id);
            res.status(200).json(user);

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }

    async add(req, res) { 
        try {
            const userData = req.body;
            const user = await userService.create(userData);

            res.status(201).json({ 
                user, 
                message: 'Usuário cadastrado com sucesso!' 
            });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }

    async edit(req, res) { 
        try {
            const id = req.params;
            const userData = req.body;
            const user = userService.update(id, userData);

            res.status(200).json({ 
                user, 
                message: 'Usuário editado com sucesso!' 
            });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }

    async delete(req, res) { 
        try {
            const id = req.params;
            await userService.destroy(id);
            res.status(204).json({ message: 'Usuário removido com sucesso!' });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }
}

module.exports = new UserController();