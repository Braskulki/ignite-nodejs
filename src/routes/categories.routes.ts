import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/categories.repository';
import { CreateCategoryService } from '../modules/cars/services/create-category.service';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
    try {
        const { name, description } = request.body;

        const createCategoryService = new CreateCategoryService(categoriesRepository);
        createCategoryService.execute({ name, description });

        return response.status(201).send();
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

categoriesRoutes.get('/', (request, response) => {
    const categories = categoriesRepository.list();
    return response.json(categories);
});

export { categoriesRoutes };
