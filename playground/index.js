import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAm0xp7xnUWKGG_RMDOCTi6GUrtuTxgJ2U",
  authDomain: "sqars-todo-app.firebaseapp.com",
  databaseURL: "https://sqars-todo-app.firebaseio.com",
  storageBucket: "sqars-todo-app.appspot.com",
  messagingSenderId: "633180397094"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '0.0.1'
  },
  isRuning: true,
  user: {
    name: 'Maciej',
    age: 27
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) =>{
  console.log('child added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'makapaka!'
});

todosRef.push({
  text: 'makapaka2!'
});
