import { Router } from 'express';
import Vehicle from '../controllers/vehicle.controller';
import { authMiddleware } from '../middleware/authJwt';

const router = Router();

router.get('/', authMiddleware, Vehicle.getVehicles);
router.get('/:id', authMiddleware, Vehicle.getVehicleById);
router.post('/', authMiddleware, Vehicle.createVehicle);

export default router;