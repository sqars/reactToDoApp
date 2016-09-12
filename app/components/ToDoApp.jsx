var React = require('react');
var uuid = require('node-uuid');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        }
      ]
    }
  },
  handleSearch: function(showAll, searchTodo){
    this.setState({
      showCompleted: showAll,
      searchText: searchTodo.toLowerCase()
    })
  },
  handleAddTodo: function(text){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  handleToggle: function(id){
    var  updatedTodos = this.state.todos.map(function(todo){
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  render: function(){
    var {todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}></TodoSearch>
        <TodoList todos={todos} onToggle={this.handleToggle}></TodoList>
        <AddTodo handleAddTodo={this.handleAddTodo}></AddTodo>
      </div>
    );
  }
});

module.exports = TodoApp;
