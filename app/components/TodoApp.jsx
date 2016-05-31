import React from 'react';
var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');

var TodoApp = React.createClass({
  getInitialState() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        }
      ]
    };
  },
  handleAddTodo(text) {
    alert('test');
  },
  render() {
    var {todos} = this.state;

    return (
      <div>
        <TodoList
          todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
