import {
    ISpecificationDto,
    Specification,
} from "../../../../model/Specification";
import { ISpecificationRepository } from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[] = [];

    findByName(name: string): Specification {
        return this.specifications.find((spec) => spec.name === name);
    }

    create({ name, description }: ISpecificationDto): Specification {
        if (this.findByName(name)) {
            throw new Error(`Specification already exists for ${name}`);
        }

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
