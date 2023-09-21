import { Router } from 'express';
import User from '../controllers/user.controller';
import { authMiddleware } from '../middleware/authJwt';

const router = Router();
// GET - users
router.get('/', authMiddleware, User.getUsers);

// GET - users/:id
router.get('/:id', authMiddleware, User.getUsersById);

// POST - users
router.post('/', authMiddleware, User.createUser);

export default router;