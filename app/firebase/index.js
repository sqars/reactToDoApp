import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyAm0xp7xnUWKGG_RMDOCTi6GUrtuTxgJ2U",
    authDomain: "sqars-todo-app.firebaseapp.com",
    databaseURL: "https://sqars-todo-app.firebaseio.com",
    storageBucket: "sqars-todo-app.appspot.com",
    messagingSenderId: "633180397094"
    };
  firebase.initializeApp(config);
} catch(e) {
  console.log(e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
