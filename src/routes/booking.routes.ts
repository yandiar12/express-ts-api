import { Router } from 'express';
import Booking from '../controllers/booking.controller';
import { authMiddleware } from '../middleware/authJwt';

const router = Router();

router.post('/', authMiddleware, Booking.createBooking);

export default router;