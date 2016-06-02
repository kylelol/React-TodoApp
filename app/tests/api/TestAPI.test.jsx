var expect = require('expect');

var TodoAPI = require('../../api/TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'optimus',
        completed: true
      },
      {
        id: 2,
        text: 'new message',
        completed: false
      },
      {
        id: 3,
        text: 'other message',
        completed: true
      }
    ];

    it('should return every all item if show completed is true', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(3);
    });

    it('should return not completed todos if showCompleted is false', () => {
      var filterTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filterTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(3);
      expect(filterTodos[0].completed).toBe(false);
    })

    it('should filter todos by search text', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, 'optimus');

      expect(filterTodos.length).toBe(1);
    });

    it('should return all todos if search text is empty', () => {
      var filterTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filterTodos.length).toBe(3);
    });
  })

});
