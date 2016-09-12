var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();

    var todo = this.refs.todo.value;
    if(todo.length > 0){
      this.refs.todo.value = "";
      this.props.handleAddTodo(todo);
    } else{
      this.refs.todo.focus();
    }
  },
  render: function(){
    return(
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todo" placeholder="Enter a thing to do!"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
