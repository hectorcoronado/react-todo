import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';


export var TodoApp = React.createClass({
  onLogout (e) {
    e.preventDefault();
    var {dispatch} = this.props;

    dispatch(actions.startLogout());

  },

  render () {
    return (
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <div className="page-actions text-left">
          <p>Created by <a href="http://hectorcoronado.codes" target="_blank">Hector Coronado</a></p>
        </div>
        <h1 className="page-title">To-do</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(TodoApp);
