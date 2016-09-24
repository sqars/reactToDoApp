import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import LoginScreen from 'LoginScreen';
import firebase from 'app/firebase/';

var requireLogin = (nextState, replace, next) =>{
  if(!firebase.auth().currentUser){
    replace('/');
  }
  next();
};

var redirectIfUserIsLogin = (nextState, replace, next) =>{
  if(firebase.auth().currentUser){
    replace('/todos');
  }
  next();
};


export default(
  <Router history={hashHistory}>
    <Route path="/" onEnter={redirectIfUserIsLogin}>
      <Route path="todos" component={TodoApp} onEnter={requireLogin}></Route>
      <IndexRoute component={LoginScreen}></IndexRoute>
    </Route>
  </Router>
);
