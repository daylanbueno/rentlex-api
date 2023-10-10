import { ISpecificationDto, Specification } from "../../../../model/Specification";
import { ISpecificationRepository } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[] = [];

    create({ name, description }: ISpecificationDto): Specification {
        const specification = new Specification();

        Object.assign(specification, { name, description });

        this.specifications.push(specification);

        return specification;
    }

    list(): Specification[] {
        return this.specifications;
    }
}
export { SpecificationRepository };
