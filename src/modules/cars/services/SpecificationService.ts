import { Specification } from "../../../model/Specification";
import { ISpecificationRepository } from "../respository/impl/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class SpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) {}

    create({ name, description }: IRequest): Specification {
        return this.specificationRepository.create({ name, description });
    }

    list() {
        return this.specificationRepository.list();
    }
}
export { SpecificationService };
