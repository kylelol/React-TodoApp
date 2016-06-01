var expect = require('expect');
var actions = require('../../actions/actions.jsx');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText('Some search text');
    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {

    var action = {
      type: 'ADD_TODO',
      text: 'New Todo'
    };
    var res = actions.addTodo('New Todo');
    expect(res).toEqual(action);
  });

  it('should generate show completed action', () => {

    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    var res = actions.showCompleted();
    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {

    var action = {
      type: 'TOGGLE_TODO',
      id: 2
    };
    var res = actions.toggleTodo(2);
    expect(res).toEqual(action);
  });

  it('should generate add todos action', () => {
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

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  })
});
