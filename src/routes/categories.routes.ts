import { Router } from 'express';

import { createCategoryController } from '../modules/cars/use-cases/create-category';
import { listCategoriesController } from '../modules/cars/use-cases/list-categories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (req, res) => {
    try {
        return createCategoryController.handle(req, res);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

categoriesRoutes.get('/', (req, res) => {
    return listCategoriesController.handle(req, res);
});

export { categoriesRoutes };
