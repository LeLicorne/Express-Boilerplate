import { Request, Response } from 'express';

import { AuthenticatedRequest } from '@/middleware/auth';
import { AuthService, CreateUserData } from '@/services/auth';

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const userData: CreateUserData = req.body;

      // Validation basique
      if (!userData.email || !userData.password) {
        res.status(400).json({ error: 'Email et mot de passe requis' });
        return;
      }

      const userRecord = await authService.createUser(userData);

      res.status(201).json({
        message: 'Utilisateur créé avec succès',
        user: {
          uid: userRecord.uid,
          email: userRecord.email,
          displayName: userRecord.displayName,
        },
      });
    } catch (error) {
      res
        .status(400)
        .json({ error: error instanceof Error ? error.message : 'Une erreur est survenue' });
    }
  }

  async getProfile(req: AuthenticatedRequest, res: Response): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({ error: 'Non authentifié' });
        return;
      }

      const userRecord = await authService.getUserById(req.user.uid);

      res.json({
        uid: userRecord.uid,
        email: userRecord.email,
        displayName: userRecord.displayName,
        emailVerified: userRecord.emailVerified,
        createdAt: userRecord.metadata.creationTime,
      });
    } catch (error) {
      res
        .status(404)
        .json({ error: error instanceof Error ? error.message : 'Une erreur est survenue' });
    }
  }

  async deleteAccount(req: AuthenticatedRequest, res: Response): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({ error: 'Non authentifié' });
        return;
      }

      await authService.deleteUser(req.user.uid);

      res.json({ message: 'Compte supprimé avec succès' });
    } catch (error) {
      res
        .status(400)
        .json({ error: error instanceof Error ? error.message : 'Une erreur est survenue' });
    }
  }
}
