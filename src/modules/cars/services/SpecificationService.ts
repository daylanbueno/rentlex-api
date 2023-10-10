import { Specification } from "../../../model/Specification";
import { ISpecificationRepository } from "../respository/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class SpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) {}

    create({ name, description }: IRequest): Specification {
        return this.specificationRepository.create({ name, description });
    }
}
export { SpecificationService };
