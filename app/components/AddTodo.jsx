var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({ // exporting raw component not connected to store
  onSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var todo = this.refs.todo.value;
    if(todo.length > 0){
      this.refs.todo.value = "";
      dispatch(actions.startAddTodo(todo));
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


export default connect()(AddTodo); // dont need any properties of state
