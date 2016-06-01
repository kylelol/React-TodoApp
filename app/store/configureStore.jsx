var redux = require('redux');

var {searchTextReducer,
      showCompletedReduer,
      todosReducer} = require('../reducers/reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReduer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
