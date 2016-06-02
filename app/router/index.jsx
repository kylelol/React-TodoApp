import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import TodoApp from 'app/components/TodoApp'
import Login from 'app/components/Login'
import firebase from 'app/firebase/'

var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/')
  }
  next()
}

var redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next()
}


export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="/todos" component={TodoApp} onEnter={requireLogin} />
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
    </Route>
  </Router>
);
