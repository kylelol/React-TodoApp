var React = require('react');
var PropTypes = React.PropTypes;
import TodoItem from './TodoItem';
var {connect} = require('react-redux');

export var TodoList = React.createClass({

  render: function() {

    var {todos} = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">
            Nothing to do
          </p>
        )
      }
      return todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id} />
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


export default connect(
  (state) => {
    return {
      todos: state.todos
    };
  }
)(TodoList);
