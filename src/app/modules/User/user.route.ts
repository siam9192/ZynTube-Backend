import { Router } from 'express';
import auth from '../../middlewares/auth';
import { UserRole } from '../../generated/prisma';

const router = Router();
router.get('/me', auth(UserRole.USER));
router.post('/setup-profile');
