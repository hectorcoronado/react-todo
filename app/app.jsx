var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';
import Login from 'Login';

var actions = require('actions'),
    store = require('configureStore').configure(),
    TodoAPI = require('TodoAPI');


store.dispatch(actions.startAddTodos());

// Initialize Foundation
$(document).foundation();

// App.css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'>
        <Route path='todos' component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
