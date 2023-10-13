import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UserRepository } from "../respository/impl/UserRepository";

export async function authInterceptorRequest(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const headerAuth = request.headers.authorization;

    const authPath = request.originalUrl;

    if (authPath === "/auth") {
        next();
    }

    if (!headerAuth) {
        throw new AppError("Token is required", 401);
    }

    const [, token] = headerAuth.split(" ");

    try {
        const { sub: userId } = verify(token, "secret");

        const user = await new UserRepository().findById(userId as string);

        if (!user) {
            throw new AppError("User is not valid!", 401);
        }

        next();
    } catch (err) {
        throw new AppError("Token is not valid!", 401);
    }
}
