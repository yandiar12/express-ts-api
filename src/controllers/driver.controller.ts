import { Request, Response } from 'express';
import Driver from '../models/driver.model';

const getDrivers = async (req: Request, res: Response) => {
    try {
        const drivers = await Driver.findAll();
        res.status(200).send({
            status: 'OK',
            data: drivers
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'INTERNAL_SERVER_ERROR',
            message: 'Error get all data'
        })
    }
}

const getDriverById = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        const driver = await Driver.findByPk(id);
        res.status(200).send({
            status: 'OK',
            data: driver
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'INTERNAL_SERVER_ERROR',
            message: 'Error get data'
        })
    }
}

const createDriver = async (req: Request, res: Response) => {
    const { driverName, driverLicenseNumber, phoneNumber } = req.body;
    try {
        const driver = await Driver.create({
            driverName,
            driverLicenseNumber,
            phoneNumber
        })
        res.status(200).send({
            status: 'OK',
            data: driver
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'INTERNAL_SERVER_ERROR',
            message: 'Error create data'
        })
    }
}

export default {
    getDrivers,
    getDriverById,
    createDriver
}