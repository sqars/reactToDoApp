var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle with id on click', () =>{
    var todo = {id: 11, text: 'somestring', completed: true};
    var spy = expect.createSpy();
    var todoComponent = TestUtils.renderIntoDocument(<Todo {...todo} onToggle={spy}></Todo>);

    var $el = $(ReactDOM.findDOMNode(todoComponent));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(todo.id);

  });
});
