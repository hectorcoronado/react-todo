var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';

import {Todo} from 'Todo';


describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    var spy = expect.createSpy(),
        todoData =
        {
          id: 199,
          text: 'Write todo.test.jsx test',
          completed: true
        },
        action = actions.startToggleTodo(todoData.id, !todoData.completed),
        todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>),
        $el = $(ReactDOM.findDOMNode(todo));


    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
