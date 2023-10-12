import { Specification } from "../../../entity/Specification";
import { SpecificationRepository } from "../respository/impl/SpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class SpecificationService {
    private specificationRepository = SpecificationRepository.getInstance();

    create({ name, description }: IRequest): Specification {
        return this.specificationRepository.create({ name, description });
    }

    list() {
        return this.specificationRepository.list();
    }
}
export { SpecificationService };
