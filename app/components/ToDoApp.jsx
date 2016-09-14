var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo'; // importing default conected 
var TodoSearch = require('TodoSearch');

var TodoAPI = require('TodoAPI')

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },
  handleSearch: function(showAll, searchTodo){
    this.setState({
      showCompleted: showAll,
      searchText: searchTodo.toLowerCase()
    })
  },
  componentDidUpdate: function(){
    TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo: function(text){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },
  render: function(){
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return(
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch}></TodoSearch>
              <TodoList></TodoList>
              <AddTodo handleAddTodo={this.handleAddTodo}></AddTodo>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
