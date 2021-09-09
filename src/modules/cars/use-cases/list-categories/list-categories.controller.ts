import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './list-categories.use-case';

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }//eslint-disable-line

    handle(request: Request, response: Response): Response {
        const categories = this.listCategoriesUseCase.execute();
        return response.json(categories);
    }
}

export { ListCategoriesController };
