var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to todos state on handleAddTodo', () => {
    var todo = "test";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp></TodoApp>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todo);

    expect(todoApp.state.todos[0].text).toBe(todo);
  });

  it('should toggle completed value when handleToggle called', () =>{
    var todo = {id: 12, text: 'loplx', completed: false};
    var todoApp = TestUtils.renderIntoDocument(<TodoApp></TodoApp>);
    todoApp.setState({todos: [todo]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(todoApp.state.todos[0].id);
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
