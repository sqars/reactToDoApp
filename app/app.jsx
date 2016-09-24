var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import LoginScreen from 'LoginScreen';
import TodoApp from 'TodoApp';

// store.subscribe(() =>{
//   var state = store.getState();
//   console.log('new state', state);
//
//   TodoAPI.setTodos(state.todos);
// });

// var initalTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initalTodos));

store.dispatch(actions.startAddTodos());

// load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/">
        <Route path="todos" component={TodoApp}></Route>
        <IndexRoute component={LoginScreen}></IndexRoute>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);


// <Router history={hashHistory}>
//   <Route path="/" component={Main}>
//     <Route path="about" component={About}></Route>
//     <Route path="contact" component={Contact}></Route>
//     <Route path="skills" component={Skills}></Route>
//     <Route path="workandeducation" component={WorkAndEducation}></Route>
//     <IndexRoute component={Home}></IndexRoute>
//   </Route>
// </Router>
