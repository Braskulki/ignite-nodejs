import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/implementations/specification.repository';
import { CreateSpecificationService } from '../modules/cars/services/create-specification.service';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post('/', (req, res) => {
    const { name, description } = req.body;
    const createSpecificationService = new CreateSpecificationService(specificationsRepository);

    createSpecificationService.execute({ name, description });
    return res.status(201).send();
});

export { specificationsRoutes };
