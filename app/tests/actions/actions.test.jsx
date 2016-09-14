var expect = require('expect');
var actions = require('actions');

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: 'abv',
        text: 'sadas',
        completed: false,
        createdAt: 123122131
      }
    };
    var res = actions.addTodo(todo.todo);

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

  it('should generate addTodos action', () =>{
    var todos = [{
      id: '111',
      text: 'sometext',
      completed: false,
      completedAt: undefined,
      createdAt: 222
    }];
    var action = {
      type: 'ADD_TODOS',
      todos: todos
    };
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should create todo and dispatch ADD_TODO', (done) =>{
    const store = createMockStore({});
    const todoText = 'my todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() =>{
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }, (e) =>{
      console.log(e);
    }).catch(done);
  });
});
