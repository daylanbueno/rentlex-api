import express from "express";
import swaggerUi from "swagger-ui-express";
import "./database";
import "./shared/container";
import "express-async-errors";

import { errorInteceptor } from "./middlewares/errorInteceptor";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(router);
app.use(errorInteceptor);

app.listen(3333, () => console.log("Server is running on port: 3333 "));
