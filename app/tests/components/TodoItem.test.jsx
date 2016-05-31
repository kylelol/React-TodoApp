var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoItem = require('../../components/TodoItem');

describe('TodoItem', () => {
  it('should exist', () => {
    expect(TodoItem).toExist();
  });

  it('should call on toggle with todo id onClick', () => {
    var todoData = {
      id: 1,
      text: 'test',
      completed: true
    };

    var spy = expect.createSpy();
    var todoItem = TestUtils.renderIntoDocument(<TodoItem {...todoData} onToggle={spy}/>)

    var $el = $(ReactDOM.findDOMNode(todoItem));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(1);

  });
});
