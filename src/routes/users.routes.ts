import { Router } from 'express';

import { CreateUserController } from '../modules/accounts/use-cases/create-user.controller';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/', createUserController.handle);

export { usersRoutes };
