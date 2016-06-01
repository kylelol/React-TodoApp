var React = require('react');
var PropTypes = React.PropTypes;
import TodoItem from './TodoItem';
var {connect} = require('react-redux');
var TodoAPI = require('../api/TodoAPI');

export var TodoList = React.createClass({

  render: function() {

    var {todos, showCompleted, searchText} = this.props;

    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">
            Nothing to do
          </p>
        )
      }

      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">
            All done. Way to go. 👊🏼💯
          </p>
        )
      } else {
        return filteredTodos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id} />
            );
          });
      }
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
    return state;
  }
)(TodoList);
