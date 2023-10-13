import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/respository/ICategoryRepository";
import { CategoryRepository } from "../../modules/cars/respository/impl/CategoryRepository";
import { SpecificationRepository } from "../../modules/cars/respository/impl/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/respository/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository",
    CategoryRepository,
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository,
);
