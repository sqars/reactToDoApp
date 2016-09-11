var React = require('react');

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
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
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
    alert('new todo' + text);
  },
  render: function(){
    var {todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}></TodoSearch>
        <TodoList todos={todos}></TodoList>
        <AddTodo handleAddTodo={this.handleAddTodo}></AddTodo>
      </div>
    );
  }
});

module.exports = TodoApp;
