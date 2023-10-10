import { Router } from "express";

import { CategoryRepository } from "../modules/cars/respository/CategoryRepository";
import { CreateCategoryService } from "../modules/cars/respository/services/CreateCategoryService";

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

const categoriesService = new CreateCategoryService(categoryRepository);

categoriesRoutes.post("/categories", (request, response) => {
    const { name, description } = request.body;

    categoriesService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/categories", (request, response) => {
    response.json(categoryRepository.list());
});

export { categoriesRoutes };
