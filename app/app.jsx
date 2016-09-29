var React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions'),
    store = require('configureStore').configure();

store.subscribe( () => {
  console.log('New state:', store.getState());
});

store.dispatch(actions.addTodo('Sleep.'));
store.dispatch(actions.setSearchText('sleep'));
store.dispatch(actions.toggleShowCompleted());

// Initialize Foundation
$(document).foundation();

// App.css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
