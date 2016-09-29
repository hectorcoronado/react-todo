var React = require('react'),
    {connect} = require('react-redux');

var Todo = require('Todo');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if (!todos.length) {
        return (
          <p className="container__message">You have no pending tasks to complete!</p>
        )
      }

      return todos.map( (todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        )
      })
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});


module.exports = connect(
  (state) => {
    return {
      todos: state.todos
    }
  }
)(TodoList);
