var React = require('react');
var PropTypes = React.PropTypes;
import * as Redux from 'react-redux';
import * as actions from 'app/actions/actions';

export var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  },
  render: function() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with github account below
              </p>
              <button className="button" onClick={this.onLogin}>Login With Github</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

export default Redux.connect()(Login);
