import express from "express";

import { categoriesRoutes } from "./categories/catetories.routes";

const app = express();

app.use(express.json());

app.use(categoriesRoutes);

app.listen(3333, () => console.log("Server is running on port: 3333 "));
