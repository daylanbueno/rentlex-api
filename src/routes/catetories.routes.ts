import { Router } from "express";

import { CategoryRepository } from "../modules/cars/respository/CategoryRepository";
import { CategoryService } from "../modules/cars/services/CategoryService";

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

const categoriesService = new CategoryService(categoryRepository);

categoriesRoutes.post("/categories", (request, response) => {
    const { name, description } = request.body;

    return response
        .status(201)
        .json(categoriesService.create({ name, description }));
});

categoriesRoutes.get("/categories", (request, response) => {
    response.json(categoriesService.list());
});

export { categoriesRoutes };
