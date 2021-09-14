import csvParse from 'csv-parse';
import fs from 'fs';

import { CategoriesRepository } from '../../repositories/implementations/categories.repository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) { }//eslint-disable-line

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    console.log(categories);

    fs.unlink(file.path, (err) => {
      if (err) throw err;
      console.log('file was deleted');
    });
  }
}

export { ImportCategoryUseCase };
