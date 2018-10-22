import { Action } from '@ngrx/store';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const CLEAR_COMPLETE = 'CLEAR_COMPLETE';



export class AddTodoAction implements  Action {
  readonly  type = ADD_TODO;

  constructor(public text: string) {}
}

export class ToggleTodoAction implements  Action {
  readonly  type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class EditTodoAction implements  Action {
  readonly  type = EDIT_TODO;

  constructor(public id: number, public text: string) {}
}

export class DeleteTodoAction implements  Action {
  readonly  type = DELETE_TODO;

  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements  Action {
  readonly  type = TOGGLE_ALL;

  constructor(public complete: boolean) {}
}

export class ClearCompleteTodoAction implements  Action {
  readonly  type = CLEAR_COMPLETE;
}


export type Actions = AddTodoAction | ToggleTodoAction | EditTodoAction | DeleteTodoAction | ToggleAllTodoAction | ClearCompleteTodoAction;
