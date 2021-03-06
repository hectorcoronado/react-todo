var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jquery'),
    TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO if valid todo text', () => {
    var todoText = 'Dominate.',
        action = actions.startAddTodo(todoText),
        spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>),
        $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO if invalid todo text', () => {
    var todoText = '',
        spy = expect.createSpy(),
        addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>),
        $el = $(ReactDOM.findDOMNode(addTodo));

  addTodo.refs.todoText.value = todoText;
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toNotHaveBeenCalled();
  });

});
