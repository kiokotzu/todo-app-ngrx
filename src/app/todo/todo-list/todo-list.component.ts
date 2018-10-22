import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';

import * as fromTypeFilter from '../../../store/actions/filter.action';
import { Todo } from '../../../store/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  public todos: Todo[];
  public typeFilter: fromTypeFilter.validFilter;

  constructor(private store: Store<AppState>) {
    this.store.subscribe((data: any) => {
      this.todos = data.todos;
      this.typeFilter = data.filter;
    });
  }

}
