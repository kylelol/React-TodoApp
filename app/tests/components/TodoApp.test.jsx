var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('../../components/TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state onHandleAddTodo', () => {
    var todoText = 'Check mail';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
      todos: []
    });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called', () => {
    var todo = {
      id: 1,
      text: 'message',
      completed: false
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
      todos: [todo]
    });
    expect(todoApp.state.todos[0].completed).toBe(false)
    todoApp.handleToggle(1);

    expect(todoApp.state.todos[0].completed).toBe(true);

  });

});
