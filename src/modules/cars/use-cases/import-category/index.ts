import { CategoriesRepository } from '../../repositories/implementations/categories.repository';
import { ImportCategoryController } from './import-category.controller';
import { ImportCategoryUseCase } from './import-category.use-case';

const categoriesRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };
