import { Router } from 'express';
import { getAllUsers, getUserByEmail, userLogin, userRegister } from '../../../controllers/tracking-controller/userController';

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.post('/register', userRegister);
userRouter.get('/:email', getUserByEmail);
userRouter.post('/login', userLogin);
userRouter.put('/:email', getAllUsers);
userRouter.delete('/:email', getAllUsers);

export default userRouter;