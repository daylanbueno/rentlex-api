import { Router } from "express";
import multer from "multer";
import { container } from "tsyringe";

import { CategoryService } from "../services/CategoryService";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/categories", async (request, response) => {
    const { name, description } = request.body;

    const categoryService = container.resolve(CategoryService);

    const category = await categoryService.create({
        name,
        description,
    });

    return response.status(201).json(category);
});

categoriesRoutes.get("/categories", async (request, response) => {
    const categoryService = container.resolve(CategoryService);
    const allCategories = await categoryService.list();
    response.json(allCategories);
});

categoriesRoutes.post(
    "/categories/import",
    upload.single("file"),
    (request, response) => {
        const { file } = request;
        const categoryService = container.resolve(CategoryService);

        categoryService.updateFile(file);

        return response.send();
    },
);

export { categoriesRoutes };
