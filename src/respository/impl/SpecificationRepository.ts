import { Repository, getRepository } from "typeorm";

import { ISpecificationDto, Specification } from "../../entity/Specification";
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
            throw new Error(`Specification already exists for ${name}`);
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
