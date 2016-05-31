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
});
