import {
    ISpecificationDto,
    Specification,
} from "../../../../model/Specification";

interface ISpecificationRepository {
    create(data: ISpecificationDto): Specification;
    list(): Specification[];
}

export { ISpecificationRepository };
