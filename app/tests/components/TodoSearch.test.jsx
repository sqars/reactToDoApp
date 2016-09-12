var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exists', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () =>{
    var searchText = "Some";
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}></TodoSearch>);

    todoSearch.refs.searchTodo.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchTodo);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper checked value', () =>{
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}></TodoSearch>);

    todoSearch.refs.showAll.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showAll);

    expect(spy).toHaveBeenCalledWith(true, '');
  });

})
