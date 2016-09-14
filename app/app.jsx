var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp')

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() =>{
  console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('walk dog'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp></TodoApp>,
  document.getElementById('app')
);
