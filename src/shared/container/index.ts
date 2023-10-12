import { container } from "tsyringe";

import { CategoryRepository } from "../../modules/cars/respository/CategoryRepository";
import { ICategoryRepository } from "../../modules/cars/respository/ICategoryRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository",
    CategoryRepository,
);
