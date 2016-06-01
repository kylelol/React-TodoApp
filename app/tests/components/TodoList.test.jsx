var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import ConnectedTodoList, {TodoList} from '../../components/TodoList';
import ConnectedTodoItem, {TodoItem } from'../../components/TodoItem';
import {configure} from '../../store/configureStore';


describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render 1 Todo component for reach Todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    },
    {
      id: 2,
      text: 'Check mail',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];

    var store = configure({
      todos
    });

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
      <ConnectedTodoList />
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodoItem);

    expect(todosComponents.length).toBe(todos.length);

  });
});
