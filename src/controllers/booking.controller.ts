import { Request, Response } from 'express';
import Booking from '../models/booking.model';

const createBooking = async (req:Request, res: Response) => {
    const { tripId, userId, passengerCount, totalCost } = req.body;
    try {
        const booking = await Booking.create({
            tripId,
            userId,
            passengerCount,
            totalCost
        });

        res.status(200).send({ status: 'OK', data: booking });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: 'INTERNAL_SERVER_ERROR', message: 'Error create data' });
    }
}

export default {
    createBooking
}