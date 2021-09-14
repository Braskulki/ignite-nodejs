import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './import-category.use-case';

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) { } //eslint-disable-line

  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importCategoryUseCase.execute(file);
    return response.send();
  }
}

export { ImportCategoryController };
