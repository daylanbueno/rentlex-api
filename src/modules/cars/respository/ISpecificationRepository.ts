import { ISpecificationDto, Specification } from "../../../model/Specification";

interface ISpecificationRepository {
    create(data: ISpecificationDto): Specification;
}

export { ISpecificationRepository };
