import { Router } from "express";
import multer from "multer";

import { CategoryService } from "../modules/cars/services/CategoryService";

const categoriesRoutes = Router();

const categoriesService = new CategoryService();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/categories", (request, response) => {
    const { name, description } = request.body;

    return response
        .status(201)
        .json(categoriesService.create({ name, description }));
});

categoriesRoutes.get("/categories", (request, response) => {
    response.json(categoriesService.list());
});

categoriesRoutes.post(
    "/categories/import",
    upload.single("file"),
    (request, response) => {
        const { file } = request;
        categoriesService.updateFile(file);

        return response.send();
    },
);

export { categoriesRoutes };
