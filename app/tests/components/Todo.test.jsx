var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var { Todo } = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch toggleTodo action on click', () =>{
    var todo = {id: 11, text: 'somestring', completed: true};
    var spy = expect.createSpy();
    var todoComponent = TestUtils.renderIntoDocument(<Todo {...todo} dispatch={spy}></Todo>);

    var $el = $(ReactDOM.findDOMNode(todoComponent));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todo.id
    });

  });
});
