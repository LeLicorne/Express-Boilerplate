import { UserRecord } from 'firebase-admin/auth';

import { auth, db } from '../config/firebase';

interface CreateUserData {
  email: string;
  password: string;
  displayName?: string;
}

interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  createdAt: string;
}

class AuthService {
  async createUser(userData: CreateUserData): Promise<UserRecord> {
    try {
      const userRecord = await auth.createUser({
        email: userData.email,
        password: userData.password,
        displayName: userData.displayName,
      });

      await this.saveUserProfile({
        uid: userRecord.uid,
        email: userData.email,
        displayName: userData.displayName,
        createdAt: new Date().toISOString(),
      });

      return userRecord;
    } catch (error) {
      throw new Error(`Erreur lors de la création de l'utilisateur: ${error}`);
    }
  }

  async getUserById(uid: string): Promise<UserRecord> {
    try {
      return await auth.getUser(uid);
    } catch (error) {
      throw new Error(`Utilisateur non trouvé: ${error}`);
    }
  }

  async deleteUser(uid: string): Promise<void> {
    try {
      await auth.deleteUser(uid);
      await db.collection('users').doc(uid).delete();
    } catch (error) {
      throw new Error(`Erreur lors de la suppression: ${error}`);
    }
  }

  async verifyToken(token: string) {
    try {
      return await auth.verifyIdToken(token);
    } catch (error) {
      throw new Error(`Token invalide: ${error}`);
    }
  }

  private async saveUserProfile(profile: UserProfile): Promise<void> {
    await db.collection('users').doc(profile.uid).set(profile);
  }
}

export { AuthService, CreateUserData, UserProfile };
