import express from "express";

import { categoriesRoutes } from "./routes/catetories.routes";
import { specificationRouter } from "./routes/specifcation.routes";

const app = express();

app.use(express.json());

app.use(categoriesRoutes);
app.use(specificationRouter);

app.listen(3333, () => console.log("Server is running on port: 3333 "));
