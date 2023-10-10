import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/respository/impl/SpecificationRepository";
import { SpecificationService } from "../modules/cars/services/SpecificationService";

const specificationRouter = Router();

const specificationRepository = new SpecificationRepository();
const specifcationService = new SpecificationService(specificationRepository);

specificationRouter.post("/specifications", (request, response) => {
    const { name, description } = request.body;
    response
        .status(201)
        .json(specifcationService.create({ name, description }));
});

specificationRouter.get("/specifications", (request, response) => {
    return response.json(specifcationService.list());
});

export { specificationRouter };
