var React = require('react');

var TodoList = require('TodoList'),
    AddTodo = require('AddTodo');

var TodoApp = React.createClass({

  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean stuff'
        },
        {
          id: 3,
          text: 'Phone home'
        },
        {
          id: 4,
          text: 'Watch tv'
        }

      ]
    };
  },

  handleAddTodo: function (text) {
    console.log('New todo: ' + text);
  },

  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
