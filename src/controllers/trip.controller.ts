import { Request, Response } from 'express';
import Trip from '../models/trip.model';

const createTrip = async (req: Request, res: Response) => {
    const {
        origin,
        destination,
        departureDate,
        departureTime,
        cost,
        vehicleId,
        userId
    } = req.body;

    try {
        const trip = await Trip.create({
            origin,
            destination,
            departureDate,
            departureTime,
            cost,
            vehicleId,
            userId
        });

        res.status(200).send({ status: 'OK', data: trip });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'INTERNAL_SERVER_ERROR',
            message: 'Error create data'
        });
    }

}

const getTripByFilter = async (req: Request, res: Response) => {

}

export default {
    createTrip
}