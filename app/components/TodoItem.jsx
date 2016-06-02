var React = require('react');
var PropTypes = React.PropTypes;
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('../actions/actions');

export var TodoItem = React.createClass({

  render: function() {
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props
    var todoClassName = completed ? "todo todo-completed" : "todo";

    var renderDate = () => {
      var message = "Created ";
      var timestamp = createdAt;

      if (completed) {
        message = "Completed ";
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };
    return (
      <div onClick={() => {
          //this.props.onToggle(id);
          dispatch(actions.startToggleTodo(id, !completed))
        }}
        className={todoClassName}>
        <div>
          <input type="checkbox" ref="todoCheckbox" checked={completed} />
        </div>
        <div>
          <p>
            {text}
          </p>
          <p className="todo__subtext">
            {renderDate()}
          </p>
      </div>
      </div>
    );
  }

});

export default connect()(TodoItem);
