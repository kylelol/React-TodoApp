var React = require('react');
var PropTypes = React.PropTypes;

var TodoItem = React.createClass({

  render: function() {
    var {text, id, completed} = this.props
    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" ref="todoCheckbox" checked={completed} />
        {text}
      </div>
    );
  }

});

module.exports = TodoItem;
