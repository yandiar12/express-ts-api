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

const findTripByFilter = async (req: Request, res: Response) => {
    const { origin, destination, date, passenger } = req.body;
    try {
        const trips = await Trip.findAll({
            where: {
                origin: origin,
                destination: destination,
                departureDate: date,
                statusBook: 'AVAILABLE'
            }
        })

        res.status(200).send({ status: 'OK', data: trips });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'INTERNAL_SERVER_ERROR',
            message: 'Error get data'
        });
    }
}

export default {
    createTrip,
    findTripByFilter
}