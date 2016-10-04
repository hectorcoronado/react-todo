import firebase from 'firebase';

// Initialize Firebase
try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);
} catch (err) {
  console.log('Error loading firebase:', err);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
