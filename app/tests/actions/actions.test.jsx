var expect = require('expect');
var actions = require('actions');

import firebase, {firebaseRef} from 'app/firebase';

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

  it('should generate UPDATE_TODO action', () =>{
    var toggleTodo = {
      type: 'UPDATE_TODO',
      updates: {completed: false},
      id: 1
    };
    var res = actions.updateTodo(toggleTodo.id, toggleTodo.updates)

    expect(res).toEqual(toggleTodo);
  });

  it('should generate toggleShowCompleted action', () =>{
     var toggleShowCompleted ={
       type: 'TOGGLE_SHOW_COMPLETED'
     };
     var res = actions.toggleShowCompleted();
     expect(res).toEqual(toggleShowCompleted);
  });

  it('should generate LOGIN action', () =>{
    var login = {
      type: 'LOGIN',
      uid: 'asdasd',
      name: 'Maciej'
    };
    var res = actions.login(login.uid, login.name);

    expect(res).toEqual(login);
  });

  it('should generate LOGOUT action', () =>{
    var logout = {
      type: 'LOGOUT'
    };
    var res = actions.logout();

    expect(res).toEqual(logout);
  })

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

  describe('tests with firebase todos', () =>{
    var testTodoRef;
    var uid;
    var todosRef;

    beforeEach((done) =>{
      var credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_ACCESS_TOKEN);

      firebase.auth().signInWithCredential(credential).then((user) =>{
        uid = user.uid;
        todosRef = firebaseRef.child(`users/${uid}/todos`);
        return todosRef.remove()
      }).then(() =>{
        testTodoRef = todosRef.push();

        return testTodoRef.set({
          text: 'something todo',
          completed: false,
          completedAt: 1231123
        });
      })
      .then(() => done())
      .catch(done);
    });

    afterEach((done) =>{
      todosRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) =>{
      const store = createMockStore({auth: {uid}});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() =>{
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();
        done();
      }, done)
    });

    it('should create todo and dispatch ADD_TODO', (done) =>{
      const store = createMockStore({auth: {uid}});
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
});
