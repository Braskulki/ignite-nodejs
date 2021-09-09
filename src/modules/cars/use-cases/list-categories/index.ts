import { CategoriesRepository } from '../../repositories/categories.repository';
import { ListCategoriesController } from './list-categories.controller';
import { ListCategoriesUseCase } from './list-categories.use-case';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };
