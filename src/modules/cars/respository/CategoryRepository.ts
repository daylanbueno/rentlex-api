import { Category, ICreateCategoryDto } from "../../../entity/Category";
import { ICategoryRepository } from "./ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private categories: Category[] = [];

    private static INSTANCE: CategoryRepository;

    private constructor() {}

    public static getInstance(): CategoryRepository {
        if (!CategoryRepository.INSTANCE) {
            CategoryRepository.INSTANCE = new CategoryRepository();
        }

        return CategoryRepository.INSTANCE;
    }

    create({ name, description }: ICreateCategoryDto): Category {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);

        return category;
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        return this.categories.find((category) => category.name === name);
    }
}

export { CategoryRepository };
