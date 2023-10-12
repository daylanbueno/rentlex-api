/* eslint-disable @typescript-eslint/no-explicit-any */
import { parse } from "csv-parse";
import fs from "fs";

import { Category, ICreateCategoryDto } from "../../../entity/Category";
import { CategoryRepository } from "../respository/CategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

class CategoryService {
    private categoryRepository = CategoryRepository.getInstance();

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

    async updateFile(file: Express.Multer.File) {
        const categories = await this.readCategoryFile(file);

        categories.map(async ({ name, description }) => {
            const categoryAlreadyExists =
                this.categoryRepository.findByName(name);
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
                    fs.promises.unlink(file.path); // revomento file of tmp folder
                    resolve(categories);
                });
        });
    }
}

export { CategoryService };
