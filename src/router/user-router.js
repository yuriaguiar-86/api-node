const express = require('express');
const userController = require('../controller/user-controller');
const userRouter = express.Router();

userRouter.get('/api/v1/users', userController.index);
userRouter.get('/api/v1/users/:id', userController.view);
userRouter.post('/api/v1/users', userController.add);
userRouter.put('/api/v1/users/:id', userController.edit);
userRouter.delete('/api/v1/users/:id', userController.delete);

module.exports = userRouter;