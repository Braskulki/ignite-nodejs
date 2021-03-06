import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../repositories/ispecification.repository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(@inject('SpecificationsRepository') private specificationsRepository: ISpecificationsRepository) { } //eslint-disable-line
  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) throw new Error('Specification already exists');

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
