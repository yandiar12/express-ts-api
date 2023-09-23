import { Request, Response, NextFunction } from 'express';
import User from '../models/user.model';
import { user_role } from '../config/config';

const checkDuplicateEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {

        // Cek Email
        const emailUser = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (emailUser) {
            return res.status(400).send({
                message: "Failed! Email is already in use!"
            });
        }

        next();
    } catch (error) {
        console.error('Error checking duplicate email:', error);
        return res.status(500).json({ message: 'An error occurred while checking duplicate email.' });
    }
};

const checkRolesExisted = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!user_role.includes(req.body.roles[i])) {
                return res.status(400).send({
                    message: "Failed! Role does not exist = " + req.body.roles[i]
                });
            }
        }
    }

    next();
};

const verifySignUp = {
    checkDuplicateEmail,
    checkRolesExisted
};

export default verifySignUp;