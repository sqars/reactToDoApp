import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo'; // importing default conected
import TodoSearch from 'TodoSearch';

import * as actions from 'actions';

export var TodoApp = React.createClass({
  onLogout: function(e){
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },
  render: function(){
    return(
      <div>
        <div className="logout-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1 className="page-title">Todo Application</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch></TodoSearch>
              <TodoList></TodoList>
              <AddTodo></AddTodo>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(TodoApp);
