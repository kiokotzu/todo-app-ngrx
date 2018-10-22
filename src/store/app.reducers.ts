import { Todo } from './todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from '../store/reducers/todo.reducer';
import * as fromFilter from '../store/reducers/filter.reducer';

import * as fromFilterAction from '../store/actions/filter.action';

export interface AppState {
  todos: Todo[];
  filter: fromFilterAction.validFilter;
}


export const appReducers: ActionReducerMap<AppState> = {
  todos: fromTodo.todoReducer,
  filter: fromFilter.filterReducer
};
