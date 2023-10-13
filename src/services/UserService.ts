import { inject, injectable } from "tsyringe";

import { IUserDto } from "../dto/IUser";
import { User } from "../entity/User";
import { UserRepository } from "../respository/impl/UserRepository";

@injectable()
class UserService {
    constructor(
        @inject("UserRepository")
        private userRepository: UserRepository,
    ) {}

    async create({
        name,
        username,
        email,
        admin,
        password,
        driverLicense,
    }: IUserDto): Promise<User> {
        const user = await this.userRepository.create({
            name,
            username,
            email,
            admin,
            password,
            driverLicense,
        });

        return user;
    }
}
export { UserService };
