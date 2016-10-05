var React = require('react'),
    ReactDOM = require('react-dom'),
    {Provider} = require('react-redux'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtils = require('react-addons-test-utils');

import TodoList from 'TodoList';
import {TodoApp} from 'TodoApp'

var configureStore = require('configureStore');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    var store = configureStore.configure(),
        provider = TestUtils.renderIntoDocument(
          <Provider store={store}>
            <TodoApp/>
          </Provider>
        );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0],
        todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

});
