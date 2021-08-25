import { Response, Request } from 'express';

import { CreateCategoryUseCase } from './create-category.use-case';

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) { }//eslint-disable-line
    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createCategoryUseCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateCategoryController };
