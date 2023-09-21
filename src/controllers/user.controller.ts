import { Request, Response } from 'express';
import User from '../models/user.model';
import bcrypt from 'bcrypt';

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        if (users) {
            res.status(200).send({ status: 'OK', data: users });
        } else {
            res.status(400).send({ status: 'NOT_FOUND', data: users });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'INTERNAL_SERVER_ERROR',
            message: 'Error get all data'
        })
    }
}

const getUsersById = async (req: Request, res: Response) => {
    let id = req.params.id;
    try {
        const user = await User.findByPk(id);

        if (user) {
            res.status(200).send({ status: 'OK', data: user });
        } else {
            res.status(400).send({ status: 'NOT_FOUND', data: user });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'INTERNAL_SERVER_ERROR',
            message: `Error get data by Id ${id}`
        });
    }
}

const createUser = async (req: Request, res: Response) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            country: req.body.country
        };

        const user = await User.create(newUser);
        res.status(200).send({ status: 'OK', data: user });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'INTERNAL_SERVER_ERROR',
            message: 'Error create User'
        });
    }
}

export default { getUsers, getUsersById, createUser }