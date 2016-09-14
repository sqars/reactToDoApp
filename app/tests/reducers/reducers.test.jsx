var expect = require('expect');
var reducers = require('reducers');

var df = require('deep-freeze-strict');

describe('reducers', () =>{
  describe('searchText reducer', () =>{
    it('should set search text', () =>{
      var action ={
        type: 'SET_SEARCH_TEXT',
        searchText: 'sometext'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () =>{
    it('should toggle showCompleted', () =>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });

  describe('todosReducer', () =>{
    it('should add todo', () =>{
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc',
          text: 'walk dog',
          completed: false,
          completedAt: 1234
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should toggle todo', () =>{
      var state = [{
        id: 123,
        text: 'sometext',
        completed: false,
        createdAt: 123,
        completedAt: undefined
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 123
      };

      var res = reducers.todosReducer(df(state), df(action));
      expect(res[0].completed).toEqual(true);
    });

    it('should add existing todos', () =>{
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
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
