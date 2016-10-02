import firebase from 'firebase';

// Initialize Firebase
try {
  var config = {
    apiKey: "AIzaSyCO9sodfunweBbFtobS81Udeh0QQVlVNOA",
    authDomain: "react-todo-app-44c67.firebaseapp.com",
    databaseURL: "https://react-todo-app-44c67.firebaseio.com",
    storageBucket: "react-todo-app-44c67.appspot.com",
    messagingSenderId: "235231655695"
  };
  firebase.initializeApp(config);
} catch (err) {
  console.log('Error loading firebase:', err);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
