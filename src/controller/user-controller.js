const userService = require('../service/user-service');

class UserController {
    async index(_, res) { 
        try {
            await userService.findAll()
                .then((users) => {
                    return res.status(200).json({ users });
                })
                .catch((err) => {
                    console.log(err);
                });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }

    async view(req, res) { 
        try {
            const id = req.params.id;

            await userService.findById(id)
                .then((user) => {                    
                    return res.status(200).json({ user });
                })
                .catch((err) => {
                    return res.status(404).json({ message: err.message });
                });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }

    async add(req, res) { 
        try {
            const { email, password } = req.body;            
            const user = await userService.create(email, password);

            return res.status(201).json({ 
                user, 
                message: 'Usuário cadastrado com sucesso!' 
            });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador!' + error });
        }
    }

    async edit(req, res) { 
        try {
            const id = req.params.id;
            const { email, password } = req.body;

            await userService.update(id, email, password)
                .then((user) => {
                    return res.status(200).json({ 
                        user, 
                        message: 'Usuário editado com sucesso!' 
                    });
                })
                .catch((err) => {
                    return res.status(404).json({ message: err.message });
                });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }

    async delete(req, res) { 
        try {
            const id = req.params.id;
            
            await userService.destroy(id)
                .then((_) => {
                    return res.status(204).json({ message: 'Usuário removido com sucesso!' });
                })
                .catch((err) => {
                    return res.status(404).json({ message: err.message });
                });

        } catch (error) {
            res.status(500).json({ message: 'Erro desconhecido! Entre em contato com o Administrador! '});
        }
    }
}

module.exports = new UserController();