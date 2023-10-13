import { Router } from "express";
import { container } from "tsyringe";

import { UserService } from "../services/UserService";

const usersRouter = Router();

usersRouter.post("/users", async (request, response) => {
    const { name, email, password, driverLicense, admin } = request.body;
    const userService = container.resolve(UserService);
    const user = await userService.create({
        name,
        email,
        password,
        driverLicense,
        admin,
    });
    response.status(201).json(user);
});

usersRouter.post("/auth", async (request, response) => {
    const { email, password } = request.body;

    const userService = container.resolve(UserService);

    const token = await userService.authenticate({ email, password });

    return response.status(200).json(token);
});

export { usersRouter };
