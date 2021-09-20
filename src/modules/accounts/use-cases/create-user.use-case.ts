import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '../dtos/icreate-user.dto';
import { IUsersRepository } from '../repositories/iusers.repository';

@injectable()
class CreateUserUseCase {
  constructor(@inject('UsersRepository') private usersRepository: IUsersRepository) { } //eslint-disable-line

  async execute({ name, driver_license, password, email, username }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({ name, driver_license, password, email, username });
  }
}

export { CreateUserUseCase };
