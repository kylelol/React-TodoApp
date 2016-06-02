import firebase from 'firebase';

try {
  console.log("configuring");
  var config = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      databaseURL: process.env.DATABASE_URL,
      storageBucket: process.env.STORAGE_BUCKET
    };
  firebase.initializeApp(config);
} catch (error) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
