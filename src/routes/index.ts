import { Router } from "express";

import { categoriesRoutes } from "./catetories.routes";
import { specificationRouter } from "./specifcation.routes";
import { usersRouter } from "./user.routes";

const router = Router();

router.use(categoriesRoutes);
router.use(specificationRouter);
router.use(usersRouter);

export { router };
