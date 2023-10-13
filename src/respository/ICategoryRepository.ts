import { Category, ICreateCategoryDto } from "../../../entity/Category";

interface ICategoryRepository {
    create(data: ICreateCategoryDto): Promise<Category>;
    list(): Promise<Category[]>;
    findByName(name: string): Promise<Category>;
}

export { ICategoryRepository };
