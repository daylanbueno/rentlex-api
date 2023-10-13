/* eslint-disable @typescript-eslint/no-explicit-any */
import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { Category, ICreateCategoryDto } from "../../../entity/Category";
import { CategoryRepository } from "../respository/impl/CategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CategoryService {
    constructor(
        @inject("CategoriesRepository")
        private categoryRepository: CategoryRepository,
    ) {}

    async create({ name, description }: IRequest): Promise<Category> {
        const categoryAlreadyExists =
            await this.categoryRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }
        const newCategory = await this.categoryRepository.create({
            name,
            description,
        });

        return newCategory;
    }

    async list(): Promise<Category[]> {
        const allCategories = await this.categoryRepository.list();
        console.log("all categories", allCategories);
        return allCategories;
    }

    async updateFile(file: Express.Multer.File) {
        const categories = await this.readCategoryFile(file);

        categories.map(async ({ name, description }) => {
            const categoryAlreadyExists =
                await this.categoryRepository.findByName(name);
            if (!categoryAlreadyExists) {
                this.create({ name, description });
            }
        });
    }

    readCategoryFile(file: Express.Multer.File): Promise<ICreateCategoryDto[]> {
        return new Promise<ICreateCategoryDto[]>((resolve) => {
            const stream = fs.createReadStream(file.path);

            const categories: ICreateCategoryDto[] = [];

            const csvFile = parse();

            stream.pipe(csvFile);

            csvFile
                .on("data", async (line: any) => {
                    const [name, description] = line;
                    categories.push({ name, description });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path); // revomento file of tmp folder
                    resolve(categories);
                });
        });
    }
}

export { CategoryService };
