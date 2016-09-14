var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {AddTodo} = require('AddTodo');
import * as actions from 'actions';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });
  it('should disparch ADD_TODO when valid todo text', () => {
    var todo = "walk dog";
    var action = actions.startAddTodo(todo);
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}></AddTodo>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todo.value = todo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
  it('should not dispatch ADD_TODO when invalid todo text', () => {
    var todo = '';
    var spy = expect.createSpy();
    var addTodoForm = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}></AddTodo>);
    var $el = $(ReactDOM.findDOMNode(addTodoForm));

    addTodoForm.refs.todo.value = todo;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
