var expect = require('expect');
var reducers = require('reducers');

var df = require('deep-freeze-strict');

describe('reducers', () =>{
  describe('searchText reducer', () =>{
    it('should set search text', () =>{
      var action ={
        type: 'SET_SEARCH_TEXT',
        searchText: 'sometext'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () =>{
    it('should toggle showCompleted', () =>{
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });
});
