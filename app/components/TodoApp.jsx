import React from 'react';
var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');
var TodoSearch = require('./TodoSearch');


var TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
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
  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render() {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch
          onSearch={this.handleSearch}/>
        <TodoList
          todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
