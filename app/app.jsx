var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions'),
    store = require('configureStore').configure(),
    TodoAPI = require('TodoAPI');


store.subscribe( () => {
  var state = store.getState();
  console.log('New state:', state);

  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Initialize Foundation
$(document).foundation();

// App.css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
