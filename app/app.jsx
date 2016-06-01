var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');
var TodoApp = require('./components/TodoApp');

var store = require('./store/configureStore').configure();
var actions = require('./actions/actions');

store.dispatch(actions.addTodo('CLean the yeard'));

console.log(store)
// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
