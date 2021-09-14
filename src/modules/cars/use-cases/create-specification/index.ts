import { SpecificationsRepository } from '../../repositories/implementations/specification.repository';
import { CreateSpecificationController } from './create-specification.controller';
import { CreateSpecificationUseCase } from './create-specification.use-case';

const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };
