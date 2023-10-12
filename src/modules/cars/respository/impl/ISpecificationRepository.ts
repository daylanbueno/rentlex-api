import {
    ISpecificationDto,
    Specification,
} from "../../../../entity/Specification";

interface ISpecificationRepository {
    create(data: ISpecificationDto): Specification;
    list(): Specification[];
    findByName(name: string): Specification;
}

export { ISpecificationRepository };
