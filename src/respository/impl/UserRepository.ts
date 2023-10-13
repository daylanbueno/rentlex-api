import { Repository, getRepository } from "typeorm";

import { IUserDto } from "../../dto/IUser";
import { User } from "../../entity/User";
import { IUserRepository } from "../IUseRepository";

class UserRepository implements IUserRepository {
    private respository: Repository<User>;

    constructor() {
        this.respository = getRepository(User);
    }

    async create({
        name,
        username,
        email,
        password,
        driverLicense,
        admin,
    }: IUserDto): Promise<User> {
        const entity = this.respository.create({
            name,
            username,
            email,
            password,
            driverLicense,
            admin,
        });

        await this.respository.save(entity);

        return entity;
    }
}
export { UserRepository };
