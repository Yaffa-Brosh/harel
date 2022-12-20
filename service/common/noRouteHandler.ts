import { Request, Response, NextFunction } from 'express';
import { NoRouteException } from './exceptions';

export function noRouteHandler(req: Request, res: Response, next: NextFunction) {

    if (!req.route) {
        let {code, message} =  new NoRouteException('No Route', '');
        res.status(code).send({data:null,err:{message}})
    } else {
        return next();
    }
}
