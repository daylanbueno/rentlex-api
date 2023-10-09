import { CategoryRepository } from "../respository/CategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoryRepository: CategoryRepository) {}

    execute({ name, description }: IRequest) {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }

        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryService };
