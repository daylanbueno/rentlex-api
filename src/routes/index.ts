import { Router } from "express";

import { categoriesRoutes } from "./catetories.routes";
import { specificationRouter } from "./specifcation.routes";

const router = Router();

router.use(categoriesRoutes);
router.use(specificationRouter);

export { router };
