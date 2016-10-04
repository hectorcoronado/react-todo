var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtils = require('react-addons-test-utils');

import  {configure} from 'configureStore';
import  ConnectedTodoList, {TodoList} from 'TodoList';
import  ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Do something',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: 2,
        text: 'And some other thing',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];

    var store = configure({
          todos
        }),
        provider = TestUtils.renderIntoDocument(
          <Provider store={store}>
            <ConnectedTodoList/>
          </Provider>
        ),
        todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0],
        todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [],
        todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>),
        $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);

  });

});
