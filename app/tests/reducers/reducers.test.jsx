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
        todo: {
          id: 'abc',
          text: 'text',
          completed: false,
          createdAt: 123456
        }
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todos = [ {
        id: '123',
        text: 'Walk the dog',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }];
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

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
