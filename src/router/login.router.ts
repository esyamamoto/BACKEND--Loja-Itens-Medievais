// src/routers/login.router.ts

import { Router } from 'express';
import loginController from '../database/controller/login.controller';

const loginRouter = Router();

loginRouter.post('/login', loginController.login);

export default loginRouter;