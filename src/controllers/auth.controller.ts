import { Request, Response } from 'express';
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwt_secret } from '../config/config';
import Role from '../models/role.model';
import { Op } from 'sequelize';

const signin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(401).json({ status: 'UNAUTHORIZED', message: 'Invalid email or password.' });
        }

        // Verifikasi kata sandi
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ status: 'UNAUTHORIZED', message: 'Invalid email or password.' });
        }

        // Create token JWT
        const token = jwt.sign({ userId: user.id }, jwt_secret, { expiresIn: '1h' });

        res.status(200).send({
            status: 'OK',
            token: token,
            data: user
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'INTERNAL_SERVER_ERROR',
            message: 'Error Sign In'
        })
    }
}

const signup = async (req: Request, res: Response) => {
    const { name, email, password, country, roles } = req.body;
    try {
        const userExists = await User.findOne({
            where: {
                email: email
            }
        });

        if (userExists) {
            return res.status(400).json({ status: 'BAD_REQUEST', message: 'Email is registered.' });
        }

        // create user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            country
        }) as any;

        if (roles) {
            const foundRoles = await Role.findAll({
                where: {
                    name: {
                        [Op.or]: roles
                    }
                }
            });

            await user.setRoles(foundRoles);
        } else {
            await user.setRoles([1]);
        }

        res.status(200).send({
            status: 'OK',
            data: user
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'INTERNAL_SERVER_ERROR',
            message: 'Error Sign Up'
        })
    }
}

export default {
    signin,
    signup
}