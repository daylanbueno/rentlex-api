import { container } from "tsyringe";

import { ICategoryRepository } from "../../respository/ICategoryRepository";
import { CategoryRepository } from "../../respository/impl/CategoryRepository";
import { SpecificationRepository } from "../../respository/impl/SpecificationRepository";
import { ISpecificationRepository } from "../../respository/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository",
    CategoryRepository,
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository,
);
