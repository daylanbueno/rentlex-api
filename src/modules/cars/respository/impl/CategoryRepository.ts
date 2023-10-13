import { Repository, getRepository } from "typeorm";

import { Category, ICreateCategoryDto } from "../../../../entity/Category";
import { ICategoryRepository } from "../ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICreateCategoryDto): Promise<Category> {
        const category = this.repository.create({
            name,
            description,
        });

        this.repository.save(category);
        return category;
    }

    async list(): Promise<Category[]> {
        const cateogries = await this.repository.find();
        return cateogries;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoryRepository };
