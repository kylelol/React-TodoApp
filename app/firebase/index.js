import firebase from 'firebase';

try {
  console.log("configuring");
  var config = {
      apiKey: "AIzaSyCNomUSFxHroYTsqnkcTSONcgVXDKDsy2s",
      authDomain: "kktodoapp.firebaseapp.com",
      databaseURL: "https://kktodoapp.firebaseio.com",
      storageBucket: "kktodoapp.appspot.com",
    };
  firebase.initializeApp(config);
} catch (error) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
