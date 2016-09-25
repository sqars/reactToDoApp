var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) =>{
  if(user){
    store.dispatch(actions.login(user.uid, user.displayName));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else{
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

// store.subscribe(() =>{
//   var state = store.getState();
//   console.log('new state', state);
//
//   TodoAPI.setTodos(state.todos);
// });

// var initalTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initalTodos));

// load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
