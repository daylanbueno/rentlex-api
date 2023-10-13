import { Router } from "express";
import { container } from "tsyringe";

import { SpecificationService } from "../services/SpecificationService";

const specificationRouter = Router();

specificationRouter.post("/specifications", async (request, response) => {
    const { name, description } = request.body;
    const specifcationService = container.resolve(SpecificationService);
    const specification = await specifcationService.create({
        name,
        description,
    });
    response.status(201).json(specification);
});

specificationRouter.get("/specifications", async (request, response) => {
    const specifcationService = container.resolve(SpecificationService);
    const specifications = await specifcationService.list();
    return response.json(specifications);
});

export { specificationRouter };
