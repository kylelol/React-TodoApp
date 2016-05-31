var React = require('react');
var PropTypes = React.PropTypes;

var TodoSearch = React.createClass({

  handleSearch() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
    return (
      <div>
        <div>
          <input type="text" ref="searchText" placeholder="Search todo" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }

});

module.exports = TodoSearch;
