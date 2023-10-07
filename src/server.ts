import express, { Response, Request } from "express";

const app = express();

app.get("/app", (req: Request, res: Response) => {
    return res.send("Hello world!!!!");
});

app.listen(3333, () => console.log("Server is running on port: 3333 "));
