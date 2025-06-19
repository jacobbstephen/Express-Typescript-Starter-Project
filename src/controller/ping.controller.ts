import { Request, Response } from "express"

export const pingHandler = (req: Request, res: Response) => {
    console.log("Request Body", req.body);
    console.log("Request body type: ",req.headers["content-type"]);
    console.log("Query params", req.query);
    console.log("URL params", req.params);
    res.send('Pong')
}