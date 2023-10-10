import { Category, ICreateCategoryDto } from "../../../model/Category";
import { ICategoryRepository } from "./ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private categories: Category[] = [];

    create({ name, description }: ICreateCategoryDto): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        return this.categories.find((category) => category.name === name);
    }
}

export { CategoryRepository };
