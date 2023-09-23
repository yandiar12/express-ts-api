import { Router } from 'express';
import Driver from '../controllers/driver.controller';
import { authMiddleware } from '../middleware/authJwt';

const router = Router();

router.get('/', authMiddleware, Driver.getDrivers);
router.get('/:id', authMiddleware, Driver.getDriverById);
router.post('/', authMiddleware, Driver.createDriver);

export default router;