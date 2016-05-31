var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('../../components/TodoList');
var TodoItem = require('../../components/TodoItem');


describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render 1 Todo component for reach Todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something'
    },
    {
      id: 2,
      text: 'Check mail'
    }];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem );

    expect(todosComponents.length).toBe(todos.length);

  });
});
