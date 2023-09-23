import { Request, Response, NextFunction } from 'express';
import { jwt_secret } from '../config/config';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-access-token');

    if (!token) {
        return res.status(401).send({ status: 'Unauthorized', message: 'Authentication is required.' });
    }

    try {
        const decoded = jwt.verify(token, jwt_secret);
        (req as CustomRequest).token = decoded;

        next();
    } catch (err) {
        console.log(err);
        res.status(401).send({ status: 'Unauthorized', message: 'Authentication is required.' });
    }
}
