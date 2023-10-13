import { IUserDto } from "../dto/IUser";
import { User } from "../entity/User";

interface IUserRepository {
    create(data: IUserDto): Promise<User>;
}

export { IUserRepository };
