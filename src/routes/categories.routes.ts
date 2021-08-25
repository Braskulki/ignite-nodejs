import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/categories.repository';
import { createCategoryController } from '../modules/cars/use-cases/create-category';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (req, res) => {
    try {
        return createCategoryController.handle(req, res);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

categoriesRoutes.get('/', (req, res) => {
    const categories = categoriesRepository.list();
    return res.json(categories);
});

export { categoriesRoutes };
