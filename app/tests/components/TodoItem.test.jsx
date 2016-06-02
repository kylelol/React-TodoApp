var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');
var actions = require('../../actions/actions');
var {TodoItem} = require('../../components/TodoItem');

describe('TodoItem', () => {
  it('should exist', () => {
    expect(TodoItem).toExist();
  });

  it('should dispatch updateTodo action on click', () => {
    var todoData = {
      id: 1,
      text: 'test',
      completed: true
    };
    var action = actions.startToggleTodo(todoData.id, !todoData.completed)

    var spy = expect.createSpy();
    var todoItem = TestUtils.renderIntoDocument(<TodoItem {...todoData} dispatch={spy}/>)

    var $el = $(ReactDOM.findDOMNode(todoItem));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);

  });
});
