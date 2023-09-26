import { Router } from 'express';
import Trip from '../controllers/trip.controller';
import { authMiddleware } from '../middleware/authJwt';

const router = Router();

router.post('/', authMiddleware, Trip.createTrip);
router.post('/filter', authMiddleware, Trip.findTripByFilter);

export default router;