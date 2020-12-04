import * as firebaseAdmin from 'firebase-admin';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: serviceAccount.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
      clientEmail: serviceAccount.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      projectId: serviceAccount.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  });
}

export { firebaseAdmin };
