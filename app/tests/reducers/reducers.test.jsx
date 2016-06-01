var expect = require('expect');
var reducers = require('../../reducers/reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Search'
      };

      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReduer', () => {
    it('should flip show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      var res = reducers.showCompletedReduer(df(false), df(action));
      expect(res).toEqual(true);
    });
  })

  describe('todosReducer', () => {
    it('should add todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should toggle todo', () => {
      var todos = [ {
        id: 2,
        text: 'Walk the dog',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];

      var action = {
        type: 'TOGGLE_TODO',
        id: 2
      };

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    })

    it('should add existing todos', () => {

      var todos = [
        {
          id: 111,
          text: 'Anything',
          completed: false,
          completedAt: undefined,
          createdAt: 400
        }
      ];

      var action = {
        type: 'ADD_TODOS',
        todos: todos
      }

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);

    })
  });

})
