"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../../../controllers/tracking-controller/userController");
const userRouter = (0, express_1.Router)();
userRouter.get('/', userController_1.getAllUsers);
userRouter.post('/register', userController_1.userRegister);
userRouter.get('/:email', userController_1.getUserByEmail);
userRouter.post('/login', userController_1.userLogin);
userRouter.put('/:email', userController_1.getAllUsers);
userRouter.delete('/:email', userController_1.getAllUsers);
exports.default = userRouter;