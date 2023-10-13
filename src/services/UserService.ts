import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IAuthDto, ITokenDto } from "../dto/IAuth";
import { IUserDto } from "../dto/IUserDto";
import { User } from "../entity/User";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../respository/impl/UserRepository";

@injectable()
class UserService {
    constructor(
        @inject("UserRepository")
        private userRepository: UserRepository,
    ) {}

    async create({
        name,
        email,
        admin,
        password,
        driverLicense,
    }: IUserDto): Promise<User> {
        const user = await this.userRepository.create({
            name,
            email,
            admin,
            password,
            driverLicense,
        });

        return user;
    }

    async authenticate({ email, password }: IAuthDto): Promise<ITokenDto> {
        const user = await this.userRepository.findByUserEmail(email);

        if (!user) {
            throw new AppError("Username or password is incorrect", 401);
        }

        const passwordMatch = compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Username or password is incorrect", 401);
        }

        const token = sign({}, "secret", {
            subject: user.id,
            expiresIn: "1d",
        });

        const auth: ITokenDto = {
            user: {
                name: user.name,
                email,
            },
            token,
        };

        return auth;
    }
}
export { UserService };
