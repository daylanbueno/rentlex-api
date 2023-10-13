import { Router } from "express";

import { authInterceptorRequest } from "../middlewares/authInterceptorRequest";
import { categoriesRoutes } from "./catetories.routes";
import { specificationRouter } from "./specifcation.routes";
import { usersRouter } from "./user.routes";

const router = Router();

router.use(authInterceptorRequest);
router.use(categoriesRoutes);
router.use(specificationRouter);
router.use(usersRouter);

export { router };
