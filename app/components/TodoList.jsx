var React = require('react');
var PropTypes = React.PropTypes;
var TodoItem = require('./TodoItem');

var TodoList = React.createClass({

  render: function() {

    var {todos} = this.props;

    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}/>
          );
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }

});

module.exports = TodoList;
