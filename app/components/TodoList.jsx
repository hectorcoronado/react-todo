var React = require('react'),
    {connect} = require('react-redux');

import Todo from 'Todo';

var TodoAPI = require('TodoAPI');

export class TodoList extends React.Component {
  render () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      if (!filteredTodos.length) {
        return (
          <p className="container__message">You have no pending tasks to complete!</p>
        )
      }

      return filteredTodos.map( (todo) => {
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
};


export default connect(
  (state) => {
    return state;
  }
)(TodoList);
