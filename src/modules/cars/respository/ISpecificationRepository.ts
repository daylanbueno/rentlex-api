import {
    ISpecificationDto,
    Specification,
} from "../../../entity/Specification";

interface ISpecificationRepository {
    create(data: ISpecificationDto): Promise<Specification>;
    list(): Promise<Specification[]>;
    findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepository };
