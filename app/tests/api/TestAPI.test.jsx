var expect = require('expect');

var TodoAPI = require('../../api/TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [
        {
          id: 1,
          text: 'test',
          completed: false
        }
      ];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {
        a: 'b'
      };
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    })
  });

  describe('getTodos', () => {
    it('should return empty array for bad local storage data', () => {
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should return todo array for valid local storage', () => {
      var todos = [
        {
          id: 1,
          text: 'test',
          completed: false
        }
      ];
      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    })
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
