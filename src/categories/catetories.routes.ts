import { Router } from "express";

import { CategoryRepository } from "../respository/CategoryRepository";

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/categories", (request, response) => {
    const { name, description } = request.body;
    categoryRepository.create({ name, description });

    const categoryAlreadyExists = categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
        return response.json({ error: "Category already exists!" });
    }

    return response.status(201).send();
});

categoriesRoutes.get("/categories", (request, response) => {
    response.json(categoryRepository.list());
});

export { categoriesRoutes };
