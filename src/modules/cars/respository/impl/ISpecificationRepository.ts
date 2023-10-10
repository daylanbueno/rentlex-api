import {
    ISpecificationDto,
    Specification,
} from "../../../../model/Specification";

interface ISpecificationRepository {
    create(data: ISpecificationDto): Specification;
    list(): Specification[];
    findByName(name: string): Specification;
}

export { ISpecificationRepository };
