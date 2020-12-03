// for now the wrapper will actually be fs and not firebase (yet)

import admin from "firebase-admin";

if (process.env.FIREBASE) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE))
  });
} else {
  const serviceAccount: admin.ServiceAccount = require('../../../sdk-key.json'); // i couldn't think of a better way lol
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const db = admin.firestore();

export * from "./genschema";
export * from "./pseudo";