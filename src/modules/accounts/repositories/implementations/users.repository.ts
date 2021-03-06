import { injectable } from 'tsyringe';
import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../../dtos/icreate-user.dto';
import { User } from '../../entities/user';
import { IUsersRepository } from '../iusers.repository';

@injectable()
class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ name, username, email, password, driver_license });
    await this.repository.save(user);
  }
}

export { UsersRepository };
