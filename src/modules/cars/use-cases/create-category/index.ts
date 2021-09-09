import { CategoriesRepository } from '../../repositories/categories.repository';
import { CreateCategoryController } from './create-category.controller';
import { CreateCategoryUseCase } from './create-category.use-case';

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };
