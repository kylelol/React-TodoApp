var expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('../../actions/actions.jsx');

var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '123abc',
        text: 'text',
        completed: false,
        createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should create todo and dispatch add todo', (done) => {
    const store = createMockStore({});
    const todoText = 'Test todo';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: 'Test todo'
      });
      done();
    }).catch(done);
  });

  it('should generate show completed action', () => {

    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    var res = actions.showCompleted();
    expect(res).toEqual(action);
  });

  it('should generate update todo action', () => {

    var action = {
      type: 'UPDATE_TODO',
      id: 2,
      updates: { completed: false}
    };

    var res = actions.updateTodo(action.id, action.updates);
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

  describe('tests with firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {
      var todosRef = firebaseRef.child('todos');
      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();

        return testTodoRef.set({
          text: 'something todo',
          completed: false,
          createdAt: 123
        })

      }).then(() => done())
      .catch(done)

    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch update todo action', (done) => {
      const store = createMockStore();
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist()
        done();
      }, done);
    });

    it('should fetch todos on app load', (done) => {
      const store = createMockStore();
      const action = actions.startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: 'ADD_TODOS'
        });
        expect(mockActions[0].todos.length).toEqual(1);
        done();
      }, done);
    });
  })
});
