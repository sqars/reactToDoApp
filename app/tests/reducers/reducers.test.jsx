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

    it('should update todo', () =>{
      var state = [{
        id: 123,
        text: 'sometext',
        completed: true,
        createdAt: 123,
        completedAt: 123
      }];
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id: state[0].id,
        updates
      };

      var res = reducers.todosReducer(df(state), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].text).toEqual(state[0].text);
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

  describe('authReducer', () =>{
    it('should login', () =>{
      var state = {};
      var action = {
        type: 'LOGIN',
        uid: 'asdasd',
        name: 'Maciej'
      };

      var res = reducers.authReducer(df(state), df(action));

      expect(res.uid).toEqual(action.uid);
      expect(res.name).toEqual(action.name);
    });

    it('should logout', () =>{
      var state = {
        uid: 'adas',
        name: 'Maciej'
      };
      var action = {
        type: 'LOGOUT'
      };

      var res = reducers.authReducer(df(state), df(action));

      expect(res).toEqual({});
    });
  });
});
