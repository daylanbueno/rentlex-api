import { inject, injectable } from "tsyringe";

import { Specification } from "../entity/Specification";
import { SpecificationRepository } from "../respository/impl/SpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class SpecificationService {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: SpecificationRepository,
    ) {}

    async create({ name, description }: IRequest): Promise<Specification> {
        const entity = await this.specificationRepository.create({
            name,
            description,
        });

        return entity;
    }

    async list() {
        const all = await this.specificationRepository.list();
        return all;
    }
}
export { SpecificationService };
