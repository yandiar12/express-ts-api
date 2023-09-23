import { Router } from 'express';
import Auth from '../controllers/auth.controller';
import verifySignUp from '../middleware/verifySignUp';

const router = Router();

router.post('/signin', Auth.signin);
router.post('/signup', verifySignUp.checkDuplicateEmail, Auth.signup);

export default router;