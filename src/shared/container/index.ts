import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/repositories/implementations/users.repository';
import { IUsersRepository } from '../../modules/accounts/repositories/iusers.repository';
import { ICategoriesRepository } from '../../modules/cars/repositories/icategories.repository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/categories.repository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/specification.repository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/ispecification.repository';

container.registerSingleton<ICategoriesRepository>('CategoriesRepository', CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>('SpecificationsRepository', SpecificationsRepository);
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
