var React = require('react'),
    {connect} = require('react-redux'),
    actions = require('actions');


export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    var {dispatch} = this.props,
        todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='todoText' placeholder='What do you need to do?'/>
          <button className="button expanded">Add To Do</button>
        </form>
      </div>
    )
  }
});

export default connect()(AddTodo);
