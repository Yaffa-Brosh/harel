import { Request } from 'express'
import morgan from 'morgan';


export const expressMiddleware = () => {
    morgan.token("body", (req: Request) => JSON.stringify(req.body));
    return morgan(":method :url :status :response-time :body");
}

