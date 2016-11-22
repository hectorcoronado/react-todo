var React = require('react'),
    {connect} = require('react-redux'),
    actions = require('actions');

export class AddTodo extends React.Component {
  handleSubmit (e) {
    e.preventDefault();

    var {dispatch} = this.props,
        todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }

  render () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' ref='todoText' placeholder='What do you need to do?'/>
          <button className="button expanded">Add To Do</button>
        </form>
      </div>
    );
  }
};

export default connect()(AddTodo);
