import { Router } from 'express';

import { AuthController } from '@/controllers/auth';
import { authenticateToken } from '@/middleware/auth';

const router = Router();
const authController = new AuthController();

// Routes publiques
router.post('/register', authController.register.bind(authController));

// Routes protégées
router.get('/profile', authenticateToken, authController.getProfile.bind(authController));
router.delete('/account', authenticateToken, authController.deleteAccount.bind(authController));

export default router;
