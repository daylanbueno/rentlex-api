import { Router } from "express";
import { container } from "tsyringe";

import { UserService } from "../services/UserService";

const usersRouter = Router();

usersRouter.post("/users", async (request, response) => {
    const { name, username, email, password, driverLicense, admin } =
        request.body;
    const userService = container.resolve(UserService);
    const user = await userService.create({
        name,
        username,
        email,
        password,
        driverLicense,
        admin,
    });
    response.status(201).json(user);
});

export { usersRouter };
