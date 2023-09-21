import { Router } from 'express';
import Auth from '../controllers/auth.controller';

const router = Router();

router.post('/signin', Auth.signin);
router.post('/signup', Auth.signup);

export default router;