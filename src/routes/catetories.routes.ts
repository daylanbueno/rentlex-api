import { Router } from "express";

import { CategoryService } from "../modules/cars/services/CategoryService";

const categoriesRoutes = Router();

const categoriesService = new CategoryService();

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
