var expect = require('expect');
var actions = require('actions');

describe('actions', () =>{
  it('should generate search text action', () =>{
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'some text'
      };
      var res = actions.setSearchText(action.searchText);

      expect(res).toEqual(action);
  });

  it('should generate add todo action', () =>{
    var todo = {
      type: 'ADD_TODO',
      text: 'some todo'
    };
    var res = actions.addTodo(todo.text);

    expect(res).toEqual(todo);
  });

  it('should generate toggleTodo action', () =>{
    var toggleTodo = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    var res = actions.toggleTodo(toggleTodo.id)

    expect(res).toEqual(toggleTodo);
  });

  it('should generate toggleShowCompleted action', () =>{
     var toggleShowCompleted ={
       type: 'TOGGLE_SHOW_COMPLETED'
     };
     var res = actions.toggleShowCompleted();
     expect(res).toEqual(toggleShowCompleted);
  });
});
