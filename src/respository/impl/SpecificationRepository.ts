import { Repository, getRepository } from "typeorm";

import { ISpecificationDto, Specification } from "../../entity/Specification";
import { AppError } from "../../errors/AppError";
import { ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        name,
        description,
    }: ISpecificationDto): Promise<Specification> {
        const spedificationAlreadyExists = await this.findByName(name);
        if (spedificationAlreadyExists) {
            throw new AppError(`Specification already exists for ${name}`, 422);
        }

        const entity = this.repository.create({
            name,
            description,
        });

        await this.repository.save(entity);

        return entity;
    }

    async list(): Promise<Specification[]> {
        const allSpecifications = await this.repository.find();
        return allSpecifications;
    }

    async findByName(name: string): Promise<Specification> {
        const all = await this.repository.findOne({ name });
        return all;
    }
}
export { SpecificationRepository };
