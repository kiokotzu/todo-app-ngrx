import * as fromTodo from './../actions/todo.action';
import { Todo } from './../todo.model';

const statusInit: Todo[] = [];

export function  todoReducer(state = statusInit, action: fromTodo.Actions): Todo[] {

  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo(action.text);
      return [ ...state, todo ];
    case fromTodo.TOGGLE_TODO:

      return state.map( item => {

        if (item.id === action.id) {
          return {
            ...item,
            complete: !item.complete
          };
        } else {
          return item;
        }

      });

    case fromTodo.EDIT_TODO:

      return state.map( item => {
        if (item.id === action.id ) {
          return {
            ...item,
            text: action.text
          };
        } else {
          return item;
        }
      });

    case fromTodo.TOGGLE_ALL:
      return state.map( item => {
        return {
          ...item,
          complete: action.complete
        };
      });

    case fromTodo.DELETE_TODO:
      return state.filter( item => item.id !== action.id);

    case fromTodo.CLEAR_COMPLETE:
      return state.filter( data => !data.complete);

    default:
      return state;
  }

}
