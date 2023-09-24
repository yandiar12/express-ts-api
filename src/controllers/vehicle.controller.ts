import { Request, Response } from 'express';
import Vehicle from '../models/vehicle.model';

const getVehicles = async (req: Request, res: Response) => {
    try {
        const vehicles = await Vehicle.findAll();
        res.status(200).send({
            status: 'OK',
            data: vehicles
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'INTERNAL_SERVER_ERROR',
            message: 'Error get all data'
        })
    }
}

const getVehicleById = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        const vehicle = await Vehicle.findByPk(id);
        res.status(200).send({
            status: 'OK',
            data: vehicle
        })
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'INTERNAL_SERVER_ERROR',
            message: 'Error get data'
        })
    }
}

const createVehicle = async (req: Request, res: Response) => {
    const { vehicleName, licensePlateNumber, capacity } = req.body;
    try {
        const vehicle = await Vehicle.create({
            vehicleName,
            licensePlateNumber,
            capacity
        })
        res.status(200).send({
            status: 'OK',
            data: vehicle
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
    getVehicles,
    getVehicleById,
    createVehicle
}