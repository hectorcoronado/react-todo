var expect = require('expect'),
    df = require('deep-freeze-strict'),
    moment = require('moment');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });


  describe('showCompletedReducer', () => {
    it('should toggle show completed boolean', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });


  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123ABC',
          text: 'Something that needs to be done.',
          completed: false,
          createdAt: 12345
        }
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todos = [{
        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 123,
        completedAt: 133
      }],
      updates = {
        completed: false,
        completedAt: null
      },
      action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
      var todos = [
        {
          id: '111',
          text: 'Stuff to do',
          completed: false,
          completedAt: undefined,
          createdAt: 1000000
        }
      ];

      var action = {
        type: 'ADD_TODOS',
        todos
      };

      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

  });


  describe ('authReducer', () => {
    it('should store user.uid on login', () =>{
      var action = {
        type: 'LOGIN',
        uid: 12345
      };

      var res = reducers.authReducer(undefined, df(action));

      expect(res).toEqual( {uid: action.uid} );
    });

    it('should clear auth object on logout', () => {
      var authData = {
        uid: 12345
      }

      var action = {
        type: 'LOGOUT'
      };

      var res = reducers.authReducer(df(authData), df(action));

      expect(res).toEqual({});
    });
  });

});
