import { Category } from '../../model/category';
import { ICategoriesRepository } from '../../repositories/icategories.repository';

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) { }//eslint-disable-line
    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoriesUseCase };
