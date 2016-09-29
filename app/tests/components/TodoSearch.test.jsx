var React = require('react'),
    ReactDOM = require('react-dom'),
    expect = require('expect'),
    $ = require('jQuery'),
    TestUtils = require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch';


describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    var searchText = 'Dog',
        spy = expect.createSpy(),
        action = {
          type: 'SET_SEARCH_TEXT',
          searchText
        },
        todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox is checked', () => {
    var showCompleted = true,
        action = {
          type: 'TOGGLE_SHOW_COMPLETED'
        },
        spy = expect.createSpy(),
        todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompleted.checked = showCompleted;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });

});
