var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  it('should exist', () =>{
    expect(TodoAPI).toExist();
  });

  // describe('setTodos', () =>{
  //   it('should set valid todos array', () =>{
  //     var todos = [{
  //       id: 23,
  //       text: "test",
  //       completed: false
  //     }];
  //     TodoAPI.setTodos(todos);
  //     var actualTodos = JSON.parse(localStorage.getItem('todos'));
  //
  //     expect(actualTodos).toEqual(todos);
  //   });
  //
  //   it('should not set invalid todos array', () => {
  //     it('should set valid todos array', () =>{
  //       var badTodos = {
  //         a: 'b'
  //       };
  //       TodoAPI.setTodos(badTodos);
  //
  //       var actualTodos = JSON.parse(localStorage.getItem('todos'));
  //       expect(actualTodos).toBe(null);
  //   });
  // });

  // describe('getTodos', () =>{
  //   it('should return empty array for bad localstorage data', () =>{
  //     var actualTodos = TodoAPI.getTodos();
  //     expect(actualTodos).toEqual([]);
  //   });
  //   it('should return todos if valid array in localstorage', () =>{
  //     var todos = [{
  //       id: 23,
  //       text: "test",
  //       completed: false
  //     }];
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //     var actualTodos = TodoAPI.getTodos();
  //     expect(actualTodos).toEqual(todos);
  //   });
  // });

  describe('filteredTodos', () =>{
    var todos = [{
      id: 1,
      text: "lolplx",
      completed: true
    },{
      id: 2,
      text: "lolplx",
      completed: true
    },{
      id: 3,
      text: "lol2plx",
      completed: false
    }];
    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should return none items if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });
    it('should return all items if searchText is not provided', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });
    it('should return two items if we provide lolplx', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'lolplx');

      expect(filteredTodos.length).toBe(2);
    });
  });
});
