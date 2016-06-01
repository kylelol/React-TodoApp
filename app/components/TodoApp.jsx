import React from 'react';
var moment = require('moment');
import TodoList from './TodoList';
import AddTodo from './AddTodo';
var TodoSearch = require('./TodoSearch');
var TodoAPI = require('../api/TodoAPI');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  },
  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render() {
    var {todos, showCompleted, searchText} = this.state;
    var filterTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch
                onSearch={this.handleSearch}/>
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
