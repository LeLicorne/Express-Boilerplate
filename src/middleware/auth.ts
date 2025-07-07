import { NextFunction, Request, Response } from 'express';

import { auth } from '../config/firebase';

export interface AuthenticatedRequest extends Request {
  user?: {
    uid: string;
    email?: string;
    [key: string]: any;
  };
}

export const authenticateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // 1. Récupérer le token depuis les headers
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

    if (!token) {
      res.status(401).json({ error: 'Token manquant' });
      return;
    }

    // 2. Vérifier le token avec Firebase
    const decodedToken = await auth.verifyIdToken(token);

    // 3. Ajouter les infos utilisateur à la requête
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      ...decodedToken,
    };

    // 4. Continuer vers le controller
    next();
  } catch (error) {
    console.error("Erreur d'authentification:", error);
    res.status(403).json({ error: 'Token invalide' });
  }
};
