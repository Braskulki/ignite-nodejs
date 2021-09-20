import { ICreateUserDTO } from '../dtos/icreate-user.dto';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
