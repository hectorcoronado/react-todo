var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    var spy = expect.createSpy(),
        todoData =
        {
          id: 199,
          text: 'Write todo.test.jsx test',
          completed: true
        },
        todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>),
        $el = $(ReactDOM.findDOMNode(todo));


    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199);
    });
});
