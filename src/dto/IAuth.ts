interface IAuthDto {
    email: string;
    password: string;
}

interface ITokenDto {
    user: {
        name: string;
        email: string;
    };
    token: string;
}
export { IAuthDto, ITokenDto };
