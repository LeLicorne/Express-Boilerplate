const admin = require('firebase-admin');

const serviceAccount = require('./waggs-e8d31-firebase-adminsdk-fbsvc-06a0b76dd3.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const auth = admin.auth();
const storage = admin.storage();

export { auth, db, storage };
export default admin;
