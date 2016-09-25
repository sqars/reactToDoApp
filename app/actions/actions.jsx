import firebase, {firebaseRef, githubProvider} from 'app/firebase/';
var moment = require('moment');

export var setSearchText = (searchText) =>{
  return{
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var addTodo = (todo) =>{
  return{
    type: 'ADD_TODO',
    todo
  };
};

export var startAddTodo = (text) =>{
  return (dispatch, getState) =>{
    var todo = {
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

    return todoRef.then(() =>{
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};

export var addTodos = (todos) =>{
  return{
    type: 'ADD_TODOS',
    todos
  };
};

export var startAddTodos = () =>{
  return (dispatch, getState) =>{
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos`);
    return todoRef.once('value').then((snapshot) =>{
      var todos = snapshot.val() || {};
      var parsedTodos = [];

      Object.keys(todos).forEach((todoId) =>{
        parsedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });
      dispatch(addTodos(parsedTodos));
    });
  };
};

export var toggleShowCompleted = () =>{
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var updateTodo = (id, updates) =>{
  return{
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) =>{
  return (dispatch, getState) =>{
    var uid = getState().auth.uid;
    var todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
    var updates = {
      completed: completed,
      completedAt: completed ? moment().unix() : null
    };

    return todoRef.update(updates).then(() =>{
      dispatch(updateTodo(id, updates));
    });
  };
};

export var startLogin = () => {
  return(dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) =>{
      console.log(result);
    }, (err) =>{
      console.log(err);
    });
  };
};

export var login = (uid, name) =>{
    return{
      type: 'LOGIN',
      uid,
      name
    };
};

export var startLogout = () => {
  return(dispatch, getState) => {
    return firebase.auth().signOut().then(() =>{
    }, (err) =>{
      console.log(err);
    });
  };
};

export var logout = () =>{
  return{
    type: 'LOGOUT'
  };
};
