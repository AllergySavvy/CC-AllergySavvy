const firebaseAdmin = require('firebase-admin');

const serviceAccount = require('./allergy-savvy-firebase-adminsdk.json');

firebaseAdmin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = firebaseAdmin;