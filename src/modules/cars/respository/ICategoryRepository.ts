import { Category, ICreateCategoryDto } from "../../../model/Category";

interface ICategoryRepository {
    create(data: ICreateCategoryDto): void;
    list(): Category[];
    findByName(name: string): Category;
}

export { ICategoryRepository };
