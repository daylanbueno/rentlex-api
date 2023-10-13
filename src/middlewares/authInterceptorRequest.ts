import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from "../respository/impl/UserRepository";

export async function authInterceptorRequest(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const headerAuth = request.headers.authorization;

    const authPath = request.path;

    if (authPath === "/auth") {
        next();
    }

    if (!headerAuth) {
        throw new Error("Token is required");
    }

    const [, token] = headerAuth.split(" ");

    try {
        const { sub: userId } = verify(token, "secret");

        const user = await new UserRepository().findById(userId as string);

        if (!user) {
            throw new Error("User is not valid!");
        }

        next();
    } catch (err) {
        throw new Error("Token is not valid!");
    }
}
