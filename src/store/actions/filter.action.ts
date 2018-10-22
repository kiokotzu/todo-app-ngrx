import { Action } from '@ngrx/store';

export const FILTER = 'FILTER';


export type validFilter = 'all' | 'complete' | 'pending';

export class SetfilterAction implements Action {

  readonly  type = FILTER;

  constructor(public filter: validFilter) { }
}

export type actions = SetfilterAction;
