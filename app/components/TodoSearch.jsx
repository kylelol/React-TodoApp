var React = require('react');
var PropTypes = React.PropTypes;
var {connect} = require('react-redux');
var actions = require('../actions/actions');


export var TodoSearch = React.createClass({

  render: function() {
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="text" ref="searchText" placeholder="Search todo" value={searchText}
            onChange={() => {
              var searchText = this.refs.searchText.value
              dispatch(actions.setSearchText(searchText))
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
                dispatch(actions.showCompleted());
              }}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }

});

export default connect(
  (state) => {
    return {
      searchText: state.searchText,
      showCompleted: state.showCompleted
    }
}
)(TodoSearch);
