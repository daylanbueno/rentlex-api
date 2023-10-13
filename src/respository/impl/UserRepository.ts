import { hash } from "bcrypt";
import { Repository, getRepository } from "typeorm";

import { IUserDto } from "../../dto/IUserDto";
import { User } from "../../entity/User";
import { AppError } from "../../errors/AppError";
import { IUserRepository } from "../IUseRepository";

class UserRepository implements IUserRepository {
    private respository: Repository<User>;

    constructor() {
        this.respository = getRepository(User);
    }

    async create({
        name,
        email,
        password,
        driverLicense,
        admin,
    }: IUserDto): Promise<User> {
        const userAlreadyExists = await this.findByUserEmail(email);

        if (userAlreadyExists) {
            throw new AppError(`User ${email} already exists`);
        }

        const passwordHash = await hash(password, 8);

        const entity = this.respository.create({
            name,
            email,
            password: passwordHash,
            driverLicense,
            admin,
        });

        await this.respository.save(entity);

        return entity;
    }

    async findByUserEmail(email: string): Promise<User> {
        const user = await this.respository.findOne({
            email,
        });

        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.respository.findOne({
            id,
        });

        return user;
    }
}
export { UserRepository };
