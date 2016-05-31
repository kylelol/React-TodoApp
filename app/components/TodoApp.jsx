import React from 'react';
var moment = require('moment');
var TodoList = require('./TodoList');
var AddTodo = require('./AddTodo');
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
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  handleToggle(id){
    var updatedTodos = this.state.todos.map((todo) => {

      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    })
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
              <TodoList
                todos={filterTodos}
                onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
