var React = require('react');
var PropTypes = React.PropTypes;
var {connect} = require('react-redux');
var actions = require('../actions/actions');


export var AddTodo = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = "";
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need todo?" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }

});

export default connect()(AddTodo);
