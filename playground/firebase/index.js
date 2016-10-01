import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCO9sodfunweBbFtobS81Udeh0QQVlVNOA",
  authDomain: "react-todo-app-44c67.firebaseapp.com",
  databaseURL: "https://react-todo-app-44c67.firebaseio.com",
  storageBucket: "react-todo-app-44c67.appspot.com",
  messagingSenderId: "235231655695"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Hector',
    age: 35
  }
});

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('Child Added:', snapshot.key, snapshot.val());
});


notesRef.on('child_changed', (snapshot) => {
  console.log('Child changed:', snapshot.key, snapshot.val());
});


notesRef.on('child_removed', (snapshot) => {
  console.log('Child removed:', snapshot.key, snapshot.val());
});


var newNoteRef = notesRef.push({
      text: 'Walk the dog!'
});
console.log('Todo id', newNoteRef.key);

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then( () => {
//   console.log('Updated.');
// }, (err) => {
//   console.log('Update failed.');
// });
//
//
// firebaseRef.update({
//   'app/name': 'Todo Application!',
//   'user/name': 'Hector Coronado'
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo Appy'
// });
//
// firebaseRef.child('user').update({
//   name: 'El Hector'
// });

// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   isRunning: null
// });

// firebaseRef.child('user/age').remove();

// firebaseRef.child('app').once('value').then( (snapshot) => {
//   console.log('Got entire db:', snapshot.key, snapshot.val());
// }, (err) => {
//   console.log('Unable to fetch value:', err);
// });

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off();
//
// firebaseRef.update( { isRunning: false } );

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// }
//
// firebaseRef.on('value', logData);
//
// firebaseRef.update({
//   'user/name': 'Héctor.',
//   'app/name': 'Todo aplicación.'
// });
