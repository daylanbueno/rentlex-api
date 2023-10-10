import { Category } from "../../../model/Category";
import { CategoryRepository } from "../respository/CategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

class CategoryService {
    constructor(private categoryRepository: CategoryRepository) {}

    create({ name, description }: IRequest): Category {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }

        return this.categoryRepository.create({ name, description });
    }

    list(): Category[] {
        return this.categoryRepository.list();
    }
}

export { CategoryService };
