import { container } from "tsyringe";

import { ICategoryRepository } from "../../respository/ICategoryRepository";
import { CategoryRepository } from "../../respository/impl/CategoryRepository";
import { SpecificationRepository } from "../../respository/impl/SpecificationRepository";
import { UserRepository } from "../../respository/impl/UserRepository";
import { ISpecificationRepository } from "../../respository/ISpecificationRepository";
import { IUserRepository } from "../../respository/IUseRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository",
    CategoryRepository,
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository,
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
