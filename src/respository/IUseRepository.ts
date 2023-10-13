import { IUserDto } from "../dto/IUserDto";
import { User } from "../entity/User";

interface IUserRepository {
    create(data: IUserDto): Promise<User>;
}

export { IUserRepository };
