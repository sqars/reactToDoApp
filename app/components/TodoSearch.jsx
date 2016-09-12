var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function(){
    var showAll = this.refs.showAll.checked;
    var searchTodo = this.refs.searchTodo.value;

    this.props.onSearch(showAll, searchTodo);
  },
  render: function(){
    return(
      <div className="container__header">
        <div>
            <input type="search" ref="searchTodo" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showAll" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
